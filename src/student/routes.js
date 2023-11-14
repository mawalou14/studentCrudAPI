const { Router } = require('express');

// Imports
const controller = require('./controller');

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudents);
router.get("/:id", controller.getStudentById);

module.exports = router;