// Import db
const pool = require('../../db');
const queries = require('./queries')

const getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const addStudent = (req, res) => {
    const { name, email, age, dob } = req.body;

    // check if email exist
    pool.query(queries.checkEmailExist, [email], (error, results) => {
        if(results.rows.length) {
            res.send("Email already exists.");
        }

        // Add Student to DB
        pool.query(queries.addStudent, 
            [name, email, age, dob], 
            (error, results) => {
            if(error) throw error;
            res.status(201).send("Student Created Successfully!");
        });
    });
}

const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
// Check if the student exist first
    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound) {
            res.send("Student does not exit in the database");
        }

        pool.query(queries.deleteStudent, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Student removed successfully")
        })
    });
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

// Check if the student exist first
pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if(noStudentFound) {
        res.send("Student does not exit in the database");
    }

        // Update the student
        pool.query(queries.updateStudent, [name, id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Student updated successfully")
        });
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent
}