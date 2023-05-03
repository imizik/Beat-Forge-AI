// 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
const express = require('express')
const router = require('./routes')

// create simple express api that calls the function above
const app = express()
const port = 3080


app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http:// localhost:${port}`)
})