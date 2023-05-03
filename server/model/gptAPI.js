const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = {
    getGenerations: async () => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Say this is a test",
            max_tokens: 7,
            temperature: 0,
        });
        return response.data.choices[0].text;
    }
};
// res.json({
//     data: response.data
// })