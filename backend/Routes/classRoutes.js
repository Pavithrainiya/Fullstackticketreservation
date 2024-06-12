// routes/classRoutes.js
const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

router.get('/classes', classController.getAllClasses);
router.post('/classes', classController.createClass);

module.exports = router;
