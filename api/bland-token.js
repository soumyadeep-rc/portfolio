// Vercel Serverless Function to get Bland AI session token
// This keeps the API key secure on the server side

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const AGENT_ID = process.env.BLAND_AGENT_ID;
  const API_KEY = process.env.BLAND_API_KEY;

  if (!AGENT_ID || !API_KEY) {
    console.error('Missing BLAND_AGENT_ID or BLAND_API_KEY environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch(`https://api.bland.ai/v1/agents/${AGENT_ID}/authorize`, {
      method: 'POST',
      headers: {
        'Authorization': API_KEY,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Bland AI API error:', response.status, errorText);
      return res.status(response.status).json({ error: 'Failed to get session token' });
    }

    const data = await response.json();
    
    // Return the token and agent ID to the client
    return res.status(200).json({ 
      token: data.token,
      agentId: AGENT_ID 
    });
  } catch (error) {
    console.error('Error getting session token:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

