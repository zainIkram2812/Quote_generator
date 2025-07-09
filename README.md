# ✨ Quote Generator Web App

This is a simple and elegant **Quote Generator** web app built using **Node.js**, **Express.js**, HTML, CSS, and JavaScript. It displays random inspirational quotes either from a local JSON file or an external API and includes a copy-to-clipboard feature.

---

## 🚀 Features

- 🎲 Generate random quotes with one click  
- ⌛ Smooth loading animation before display  
- 📋 Copy quotes directly to clipboard  
- 🧠 Quotes stored in a local JSON file or fetched from an external API  
- ⚙️ Built with modular and clean structure

---

## 🛠️ Technologies Used

- Node.js  
- Express.js  
- HTML5 & CSS3  
- Vanilla JavaScript  
- Local JSON or External API (optional)

---

## 📁 Project Structure

Quote_generator/
│
├── public/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── quotes.json
├── server.js
├── package.json
└── README.md

---

## ⚙️ Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/zainIkram2812/Quote_generator.git
cd Quote_generator
npm install
node server.js
Step 4: View in Browser
Go to: http://localhost:3000
🔄 Optional: Use External API
If you want to use an external quote API (like API Ninjas):

Sign up and get an API key.

In your server.js, replace the local file reading logic with:

js
Copy
Edit
const fetch = require("node-fetch");

app.get("/api/quote", async (req, res) => {
  const apiUrl = "https://api.api-ninjas.com/v1/quotes";
  try {
    const response = await fetch(apiUrl, {
      headers: { "X-Api-Key": "YOUR_API_KEY" }
    });
    const data = await response.json();
    res.json({ quote: data[0].quote, author: data[0].author });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});
[
  {
    "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "quote": "The best way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
  }
]
🧠 Learnings & Concepts Covered
Express routing and APIs

Serving static files

Fetch API & async/await

JSON data handling

DOM manipulation in JavaScript

Error handling & UI feedback
🙌 Author
Zain Ikram
GitHub: @zainIkram2812

yaml
Copy
Edit

---

Let me know if you want to include badges, deployment links (e.g. Vercel or Netlify), or a sample screenshot.
