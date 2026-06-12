export default async function handler(req, res) {
  // 只允許 POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { system, message } = req.body;

  if (!message) {
    return res.status(400).json({ error: '缺少 message 參數' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,   // 從環境變數讀取，不暴露給前端
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: system || '你是蘭花種植顧問，使用繁體中文，回答簡潔友善。',
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(response.status).json({ error: err.error?.message || 'API 錯誤' });
    }

    const data = await response.json();
    return res.status(200).json({ text: data.content[0].text });

  } catch (error) {
    console.error('Claude API error:', error);
    return res.status(500).json({ error: '伺服器錯誤，請稍後再試' });
  }
}
