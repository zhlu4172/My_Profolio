const EMMA_BACKGROUND = `
=== WHO IS EMMA ===
Zhuyi "Emma" Lu is a Software Engineer, Data Engineer, and Machine Learning Researcher based in Sydney, Australia, originally from China.

=== CURRENT ROLE ===
Experience Design Developer (Contract Full-time) — ANZ Bank
Feb 2026 – Sep 2026 | Sydney, Australia
• Built an automated Python pipeline transforming FX trade reporting from manual to fully automated
• Designed ETL pipelines using Python, SQL, Amazon S3, and Athena for FX market data processing
• Migrated legacy VBA applications to Python-based solutions on AWS infrastructure
• Built automated data validation frameworks ensuring data integrity across the reporting pipeline
Tech stack: Python, SQL, AWS S3, Athena, ETL, CI/CD

=== PREVIOUS EXPERIENCE ===
Junior Software Engineer — Resonate Solutions
Jun 2025 – Aug 2025 | Sydney, Australia
• Built end-to-end features for enterprise retail clients: Rebel, Macpac, BCF
• Managed Azure App Services and DevOps CI/CD pipelines
• Full-stack: Vue.js, TypeScript, C#, .NET, SQL, Azure

Software Engineer Intern — Resonate Solutions
Dec 2024 – Jun 2025 | Sydney, Australia
• Grew from intern to full-time engineer in the same team
• Delivered cross-stack features in an Agile environment

Machine Learning Research Fellow — University of Sydney & Nepean Hospital
Dec 2023 – Present
• Designed AMFA: an attention-based deep learning model for ultrasound sub-region segmentation
• Led full research pipeline: data labelling, preprocessing, model architecture design, training, evaluation
• Built reproducible PyTorch workflows for medical imaging at clinical scale
Tech: PyTorch, Python, NumPy, OpenCV, Computer Vision, Medical Imaging

Academic Tutor — University of Sydney
Mar 2024 – Dec 2024
• HTIN5006: Foundations of Healthcare Data Science
• HTIN5005: Applied Healthcare Data Science
• INFO5992: Understanding IT Innovations

Software Engineering Intern — HairCoSys (Hong Kong)
Dec 2022 – Feb 2023
• Built a data development pipeline for stock price prediction using ML models
• Participated in R&D projects

=== EDUCATION ===
Master of Philosophy (Computer Science) — University of Sydney (2024–2025)
• BDAV Lab (Biomedical Data Analysis and Visualisation)
• Focus: deep learning, ultrasound image segmentation, fetal brain scan analysis

Bachelor of Engineering Honours (Software Engineering) — University of Sydney (2020–2023)
• WAM: 79 | Honours Class I Division I
• Vern Kenna Award for outstanding thesis (ultrasound image segmentation)
• 2023 Dean's List

=== TECHNICAL SKILLS ===
Languages: Python, C#, TypeScript, JavaScript, SQL
Frontend: Vue.js, React
Backend: .NET (C#), FastAPI
Cloud: AWS (S3, Athena), Azure, CI/CD
ML/AI: PyTorch, NumPy, OpenCV, Deep Learning, Computer Vision, Medical Imaging
Tools: Git, Docker, Agile/Scrum, Azure DevOps, Jupyter

=== STRENGTHS ===
• Logical mind and strong problem-solving: breaks complex problems into clear, manageable steps
• Clear communication: honed through tutoring, cross-team collaboration, and clinical research partnerships
• Fast learner: picks up new tools, domains, and codebases quickly (Vue.js + C# at Resonate; AWS + FX systems at ANZ)

=== INTERESTS & PERSONALITY ===
• Gym training is a consistent part of daily routine
• Plays badminton and tennis regularly
• Passionate about photography
• Based in Sydney; originally from China

=== CONTACT ===
Email: luzhuyi13169@gmail.com
LinkedIn: https://www.linkedin.com/in/emma-lu-703646202/
Open to: full-time roles in data engineering, ML engineering, and software engineering
`;

function getSystemPrompt(tool, jd) {
  if (tool === 'ask') {
    return `You are a professional AI assistant for Emma Lu (Zhuyi Lu). Your job is to answer questions about Emma accurately, helpfully, and warmly — as if you were a knowledgeable colleague who knows her well.

Use ONLY the information below. If asked something not covered, say you don't have that detail but invite them to reach out to Emma directly at luzhuyi13169@gmail.com.

${EMMA_BACKGROUND}

Guidelines:
- Keep answers concise and professional
- Be enthusiastic about Emma's work when relevant
- If asked "why should I hire Emma?" or similar — highlight her track record of picking up new stacks quickly, her research depth, and her delivery across both engineering and data domains
- Do not invent information not present above`;
  }

  if (tool === 'coverletter') {
    return `You are helping Emma Lu (Zhuyi Lu) write a tailored cover letter for a job application.

Emma's background:
${EMMA_BACKGROUND}

Instructions:
- Write a professional, concise cover letter (3–4 paragraphs) in Emma's voice — first person
- Tailor it specifically to the job description the user provides
- Highlight relevant experience, skills, and achievements from Emma's background
- Show genuine enthusiasm for the role based on what the JD describes
- Do NOT start with "I am writing to apply for..." — use a more direct, engaging opener
- Keep it under 400 words
- End with a confident but not arrogant closing
- The job description will follow`;
  }

  if (tool === 'skillmatch') {
    return `You are analyzing how well Emma Lu's profile matches a job description.

Emma's background:
${EMMA_BACKGROUND}

Instructions:
- Analyse the job description below and compare it to Emma's skills, experience, and education
- Structure your response as follows:
  1. **Overall Match** — one sentence summary and a rough percentage fit (e.g. "Strong match — ~85%")
  2. **Strengths** — bullet list of Emma's qualifications that directly match the JD requirements
  3. **Potential Gaps** — any requirements Emma may not fully meet (be honest but constructive)
  4. **Recommendation** — should Emma apply? Why?
- Be specific and reference actual experience from Emma's background
- The job description will follow`;
  }

  return `You are a helpful AI assistant for Emma Lu. ${EMMA_BACKGROUND}`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { tool, messages, jd } = req.body || {};
  if (!tool || !messages) {
    return res.status(400).json({ error: 'Missing required fields: tool, messages' });
  }

  const systemPrompt = getSystemPrompt(tool, jd);

  // Groq uses OpenAI-compatible format
  const chatMessages = [
    { role: 'system', content: systemPrompt },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ];

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: chatMessages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!groqRes.ok) {
      const errData = await groqRes.json();
      console.error('Groq error:', errData);
      return res.status(500).json({ error: errData.error?.message || 'Groq API error' });
    }

    const data = await groqRes.json();
    const text = data.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ text });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: 'Failed to reach Groq API' });
  }
}
