const { Router } = require('express');

// Imports
const controller = require('./controller');

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentById);

module.exports = router;