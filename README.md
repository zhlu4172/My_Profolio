# Zhuyi (Emma) Lu — Portfolio

**Live site: [my-profolio-u2j6.vercel.app](https://my-profolio-u2j6.vercel.app)**

Personal portfolio website built with React, deployed on Vercel.

## Stack

- React 18 + React Router v6
- Framer Motion (SVG radar chart animations)
- Vercel Serverless Functions (AI API proxy)
- Groq API (Llama 3.3 — powers the Ask Emma chatbot and Skill Match tool)

## Local Development

```bash
npm install
```

Create a `.env` file in the project root:
```
GROQ_API_KEY=your_groq_api_key
```

Run with Vercel dev (required for the AI API routes):
```bash
npx vercel dev
```

Or for frontend-only work:
```bash
npm start
```

## Project Structure

```
api/
└── chat.js              # Vercel serverless function — Groq API proxy
src/
├── components/
│   ├── FloatingChat/    # Floating Ask Emma chat widget
│   ├── Navigation/
│   └── SkillRadar/      # Interactive SVG radar chart
├── pages/
│   ├── MainPage.js
│   ├── About.js
│   ├── Experience.js
│   └── AIToolbox.js     # Ask Emma + Skill Match tools
public/
└── images/              # Photos and project screenshots
```

## Environment Variables

| Variable | Description |
|---|---|
| `GROQ_API_KEY` | Groq API key for the AI chat features |
