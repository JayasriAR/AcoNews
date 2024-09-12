const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.GNEWS_API_KEY;  // Replace with the valid GNews API key
const BASE_URL = 'https://gnews.io/api/v4';

// Utility function to handle search operators (AND, OR, NOT, "Phrase")
const buildSearchQuery = (query) => {
    // Replace AND, OR, and NOT operators with corresponding logical operators for GNews
    let processedQuery = query
        .replace(/ AND /gi, ' ')    // 'AND' is implicit in GNews API, so we just remove it
        .replace(/ OR /gi, ' OR ')  // 'OR' operator remains the same
        .replace(/ NOT /gi, ' -');  // 'NOT' is converted to '-' for exclusion

    return processedQuery;
};

// Reusable function for making API requests
const getNewsFromApi = async (endpoint, params) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, { params: { ...params, apikey: API_KEY } });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from API:', error.response?.data || error.message);
        throw new Error('Error fetching data from API');
    }
};

// Controller function to get top headlines
const getTopHeadlines = async (req, res) => {
    const category = req.query.category || 'general';  // Default category is 'general'
    const lang = req.query.lang || 'en';  // Default to English if not provided
    const country = req.query.country || 'in';  // Default to India if not provided
    
    console.log(`Received parameters: category=${category}, lang=${lang}, country=${country}`);
    
    try {
        const params = { category, lang, country };
        const data = await getNewsFromApi('top-headlines', params);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching top headlines' });
    }
};

// Controller function for searching news with operators
const searchNews = async (req, res) => {
    let q = req.query.q;  // Get the raw query from the request
    const lang = req.query.lang || 'en';  // Default to English if not provided
    const country = req.query.country || 'in';  // Optionally use a country code

    if (!q) {
        return res.status(400).json({ error: 'The query parameter "q" is required.' });
    }

    // Process the query string to handle AND, OR, NOT, and "Phrase" operators
    q = buildSearchQuery(q);

    console.log(`Processed parameters: q=${q}, lang=${lang}, country=${country}`);

    try {
        const params = { q, lang };
        if (country) {
            params.country = country;
        }

        const data = await getNewsFromApi('search', params);
        if (data.articles.length === 0) {
            return res.status(200).json({ message: 'No articles found. Try searching by language or region.' });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching for news' });
    }
};

module.exports = {
    getTopHeadlines,
    searchNews,
};
