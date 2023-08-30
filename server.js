const express = require("express");
const cors = require("cors");
const { getQuestion } = require("./openai");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("hello, world!");
})


app.post('/api/question',getQuestion);



app.use((req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next();
});


