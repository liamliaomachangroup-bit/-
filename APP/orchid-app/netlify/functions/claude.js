exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: '無效的 JSON' }) };
  }

  const { system, message } = body;
  if (!message) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: '缺少 message 參數' }) };
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
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
      return { statusCode: response.status, headers, body: JSON.stringify({ error: err.error?.message || 'API 錯誤' }) };
    }

    const data = await response.json();
    return { statusCode: 200, headers, body: JSON.stringify({ text: data.content[0].text }) };

  } catch (error) {
    console.error('Claude API error:', error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: '伺服器錯誤，請稍後再試' }) };
  }
};
