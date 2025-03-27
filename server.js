// server.js

const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public")); // This serves static files like HTML, CSS, JS

// API route to interact with OpenAI
app.post("/ask", async (req, res) => {
    const userQuestion = req.body.question;
    
    try {
        // Replace with your OpenAI API key
        const apiKey = 'YOUR_OPENAI_API_KEY';
        
        const response = await axios.post(
            "https://api.openai.com/v1/completions",
            {
                model: "text-davinci-003",  // You can use other models like gpt-3.5-turbo
                prompt: userQuestion,
                max_tokens: 100,
                temperature: 0.7,
            },
            {
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                }
            }
        );

        const aiResponse = response.data.choices[0].text.trim();
        res.json({ answer: aiResponse });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching AI response.");
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


