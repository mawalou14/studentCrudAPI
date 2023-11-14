const { Router } = require('express');

// Imports
const controller = require('./controller');

const router = Router();

router.get("/", controller.getStudents);

module.exports = router;