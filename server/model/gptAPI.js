const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateTemplate = (body) => {
  const bpm = body.bpmEnabled ? body.bpm : '';
  const key = body.keyEnabled ? body.note + ' ' + body.scale : '';
  console.log(body)
  const template = `Pretend you are ${body.artist}, I'm creating a new beat with a ${body.vibe} sound. Please give me a template of how you would start the beat. Give the answer in this format and the whole answer should only be in this format, but dont include quotation marks in the answer:
{
Artist: ${body.artist}
Vibe: ${body.vibe}
BPM: ${body.bpm}
Key: ${key}
Chord Progression: [Specify the chord progression in notes ("C, Cm" just for example). And give it in correct order. Feel free to use a common chord progression in the key I gave.]
Bars: [Specify the number of bars]
Timing of the chords on the bar: [Specify the timing of each chord using subdivisions]
}

For the Timing of the chords section, The number represents the subdivision. "t" represents a triplet. A "." add a half. e.g. "4n" is a quarter note (which is one fourth of a whole measure), "4t" is a quarter note triplet, and "4n." is a dotted quarter note. “2n” is for a half note, “8n” is an eighth note and so on. 1m is the whole measure which is the standard for what we want for the timing as a chord is typically played for a bar”...
Please note that the timing of the chords should align with the specified number of bars and they should all add up to be the length of the number of bars(measures), and you can use a combination of subdivisions to create variation and match the desired artistic style.

Don't give me an introduction just return the answer in the format how I listed. Also, give me an exact answer and don't give me an explanation, for example for BPM just give me a bpm to use and don't give me a reason in ().  Keep the number of chords in the progression the same as the number of bars
Can you return it so that it is in a JSON object format, ONLY THE OBJECT NOTHING ELSE. That means that key and values should have quotation marks and there should be a comma seperating each key and value pair.
`;

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
