const OpenAI = require("openai");
const { apis } = require("./apisObjects");
require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


async function getQuestion(req, res) {
    const postData = req.body;

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: apis.question.messages(req.body),
        temperature: 1.5,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    res.status(201).json({ message: response.choices[0].message.content });

}




module.exports = { getQuestion }







