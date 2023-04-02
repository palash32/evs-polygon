const express = require('express');
const router = express.Router();
const CompanyEmails = require('./emails/company');
router.post('/register', CompanyEmails.create);
router.post('/authenticate', CompanyEmails.authenticate);
module.exports = router;