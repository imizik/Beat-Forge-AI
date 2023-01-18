// 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
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const configuration = new Configuration({
    organization: "org-mCVHasbHM1wkMJNbxHHyT2N1",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// create simple express api that calls the function above
const app = express()
const port = 3080

app.post('/', async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
    console.log(response.data.choices[0].text)
    res.json({
        data: response.data
    })
})
app.listen(port, () => {
    console.log(`Example app listening at http:// localhost:${port}`)
})