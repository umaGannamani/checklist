const express = require('express');
const path = require('path');
const { fetchApplicationData } = require('./api');
const { evaluateRules } = require('./rules');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/checklist', async (req, res) => {
    try {
        const applicationId = "67339ae56d5231c1a2c63639";
        const data = await fetchApplicationData(applicationId);
        const results = evaluateRules(data);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
