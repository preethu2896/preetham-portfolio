module.exports = async (req, res) => {
  // CORS setup
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body || {};
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Missing GEMINI_API_KEY environment variable.');
    return res.status(500).json({ error: 'API key configuration missing on server' });
  }

  // Format contents array for Gemini API (uses 'user' and 'model' roles)
  const contents = [];
  if (Array.isArray(history)) {
    for (const msg of history) {
      if (msg.role === 'user' || msg.role === 'model') {
        contents.push({
          role: msg.role,
          parts: [{ text: msg.text }]
        });
      }
    }
  }

  // Append current message
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  const systemInstruction = `You are Preetham's Portfolio Assistant. Your task is to act as a personal portfolio guide and answer questions only about Preetham, his projects, experience, education, achievements, and contact information.

Here is the only authentic information about Preetham:

ABOUT PREETHAM:
Preetham B is a Computer Science and Design student passionate about AI, software development, and building real-world products.

PROJECTS:
1. AutoCTI: Automated Cyber Threat Detection System using AutoML, FastAPI, React, and Machine Learning.
2. NavMind AI: Traffic Prediction and Smart Route Recommendation System using Machine Learning and real-time analytics.
3. Electra: Secure E-Voting System for educational institutions.
4. Inklayer: Modern Streetwear Brand focused on branding, design, and digital-first customer experiences.

EXPERIENCE:
- AI Engineer Intern at Inventeron Technologies LLP.

ACHIEVEMENTS:
- IEEE Research Publication
- KSCST Selected Project
- Google AI Essentials
- PostgreSQL Certification

EDUCATION:
- Degree: Bachelor of Engineering in Computer Science and Design
- Institution: Canara Engineering College
- Years: 2022–2026

CONTACT INFO:
- LinkedIn: https://linkedin.com/in/preethambhandary
- GitHub: https://github.com/preethu2896
- Email: Preetham can be reached via the contact form on the website, or via LinkedIn/GitHub.

BEHAVIOR RULES (CRITICAL):
1. You must ONLY answer questions directly related to Preetham, his projects, his experience, his education, his achievements, and his contact info.
2. IF the user asks an unrelated question (for example, general programming questions, writing unrelated essays/code, translations, calculations, general knowledge, weather, cooking, etc.), you MUST respond with EXACTLY:
"I'm designed to answer questions about Preetham, his projects, experience, and achievements."
Do NOT say anything else. Do not explain why, do not elaborate, do not give any other text.
3. Keep all responses concise, direct, and professional.
4. Never fabricate information. If a detail is not in the facts above, state that you don't have that information. Do not guess or extrapolate.
5. Prefer portfolio information over general internet knowledge.`;

  const requestBody = {
    contents,
    systemInstruction: {
      parts: [{ text: systemInstruction }]
    },
    generationConfig: {
      temperature: 0.1,
      maxOutputTokens: 600
    }
  };

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      return res.status(response.status).json({ error: 'Failed to communicate with Gemini API' });
    }

    const data = await response.json();
    let reply = '';
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      reply = data.candidates[0].content.parts[0].text;
    } else {
      console.error('Unexpected response structure from Gemini API:', JSON.stringify(data));
      return res.status(500).json({ error: 'Invalid response from AI model' });
    }

    return res.status(200).json({ reply: reply.trim() });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
