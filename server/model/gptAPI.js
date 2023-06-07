const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateTemplate = (body) => {
  const bpm = body.bpmEnabled ? body.bpm : '';
  const key = body.keyEnabled ? body.note + ' ' + body.scale : '';

  const template = `Pretend you are ${body.artist} and you are making a new beat. You want it to sound ${body.vibe}. Please give me a template on how you would start the beat.for the timing of the chords, make it based off the beats. For example, if your response said 4 bars, that means there are 16 beats in 4 bars. Tell me just the beat numbers you would start the chords at, in order, comma separated (for example, the answer in the template would be 1, 4, 8, 12 if each chord was played at the start of each bar).  Give the answer in this format and only give the following information in this format:
  Artist: ${body.artist}
  Vibe: ${body.vibe}
  BPM: ${body.bpm}
  Key: ${body.key}
  Chord Progression:
  Bars:
  Timing of the chords on the bar:`;

  return template;
};

const generatePrompt = (body) => {
  const template = generateTemplate(body);
  return {
    model: 'text-davinci-003',
    prompt: template,
    max_tokens: 100,
    temperature: 0.5,
  };
};

module.exports = {
  getGenerations: async (body) => {
    const prompt = generatePrompt(body);
    const response = await openai.createCompletion(prompt);
    return response.data.choices[0].text;
  },
};
// res.json({
//     data: response.data
// })
