const apis = {
    question: {
        messages:(body)=>([
            {
                "role": "system",
                "content": "you will be provide with this object \n{\nlang: the learning language,\nlevel: the level of the user from 1 to 10,\ntopic: the topic of the question\n}\n\nand your work is to give me a common question that used in real life based on that object information's , question must be less than 10 words"
            },
            {
                "role": "user",
                "content": "{\nlang:\"english\"\nlevel: 5 ,\ntopic:\"family\"\n}"
            },
            {
                "role": "assistant",
                "content": "How many siblings do you have?"
            },
            {
                "role": "user",
                "content": "{\nlang:\"english\"\nlevel: 2 ,\ntopic:\"meeting some one\"\n}"
            },
            {
                "role": "assistant",
                "content": "how are you doing?"
            },
            {
                "role": "user",
                "content": "{\nlang:\"english\"\nlevel: 8 ,\ntopic:\"meeting some one\"\n}"
            },
            {
                "role": "assistant",
                "content": "What is your occupation?"
            },
            {
                "role": "user",
                "content": JSON.stringify(body)
            },
        ])
    }
}

module.exports = {apis}

