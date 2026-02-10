export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const apiKey = process.env.WEB3FORMS_ACCESS_KEY;

        if (!apiKey) {
            console.error('Error: WEB3FORMS_ACCESS_KEY is missing in environment variables.');
            return res.status(500).json({
                success: false,
                message: 'Server configuration error: Missing Access Key. Please add WEB3FORMS_ACCESS_KEY to Vercel Environment Variables.'
            });
        }

        const body = req.body;

        // Add the secure key server-side
        const payload = {
            ...body,
            access_key: apiKey
        };

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok) {
            return res.status(200).json(data);
        } else {
            console.error('Web3Forms API Error:', data);
            return res.status(500).json(data);
        }
    } catch (error) {
        console.error('Serverless Function Error:', error);
        return res.status(500).json({
            success: false,
            message: `Internal Server Error: ${error.message}`
        });
    }
}
