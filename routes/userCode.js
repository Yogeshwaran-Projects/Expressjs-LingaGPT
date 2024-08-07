// routes/userCode.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Endpoint to save user code
router.post('/user-code', (req, res) => {
  const { username, codingStyle1, codingStyle2, codingStyle3 } = req.body;

  const query = 'INSERT INTO user_code (username, coding_style1, coding_style2, coding_style3) VALUES (?, ?, ?, ?)';
  db.query(query, [username, codingStyle1, codingStyle2, codingStyle3], (err, results) => {
    if (err) {
      console.error('Error saving code:', err);
      return res.status(500).send('Server error');
    }
    res.status(201).send({ id: results.insertId });
  });
});

// Endpoint to fetch user codes
router.get('/user-codes', (req, res) => {
  const query = 'SELECT * FROM user_code';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching codes:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).json(results);
  });
});

module.exports = router;
