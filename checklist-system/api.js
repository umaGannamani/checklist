const fetch = require('node-fetch');

async function fetchApplicationData(applicationId) {
    const API_URL = `http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/${applicationId}`;
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw new Error('Failed to fetch application data.');
    }
}

module.exports = { fetchApplicationData };
