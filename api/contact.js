export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const body = req.body;

        // Add the secure key server-side
        const payload = {
            ...body,
            access_key: process.env.WEB3FORMS_ACCESS_KEY
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
            return res.status(500).json(data);
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}
