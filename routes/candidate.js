const express = require('express');
const router = express.Router();
const candidateEmails = require('./emails/candidate');
router.post('/registerCandidate',candidateEmails.register);
module.exports = router;