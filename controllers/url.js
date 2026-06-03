const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;

    if (!body.url) {
        return res.status(400).send("URL is required");
    }

    const shortId = shortid();

    await URL.create({
        shortId,
        redirectURL: body.url,
        visitHistory: [],
    });

    const allUrls = await URL.find({});

    return res.render("home", {
        urls: allUrls,
    });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOne({ shortId });

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
};