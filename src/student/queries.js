

const getStudents = "SELECT * FROM student";
const getStudentById = "SELECT * FROM student WHERE id = $1";
const checkEmailExist = "SELECT s FROM student s WHERE s.email = $1";
const addStudent = "INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const deleteStudent = "DELETE FROM student WHERE id = $1";
const updateStudent = "UPDATE student SET name = $1 WHERE id = $2";

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExist,
    addStudent,
    deleteStudent,
    updateStudent
}