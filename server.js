const express = require('express');
const app = express();

// Imports
const studentRoute = require('./src/student/routes');


const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.use('/api/v1/students', studentRoute);

app.listen(port, () => console.log(`app listening on port ${port}`));   