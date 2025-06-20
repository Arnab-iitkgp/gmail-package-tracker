const express = require('express');
const router = express.Router();
const { oauth2Client, getAuthURL } = require('../services/gmailService');

//Send user to Gmail login
router.get('/login', (req, res) => {
  const url = getAuthURL();
  res.redirect(url);
});

// Handle Google redirect after login
router.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    res.send('✅ Gmail connected! Token received.');
  } catch (err) {
    console.error('Error getting token:', err);
    res.status(500).send('Authentication failed.');
  }
});

module.exports = router;
