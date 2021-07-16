var express = require('express');
var router = express.Router();
const StudentController = require('../controllers/studentController');

//Get all todos.
router.get('/', StudentController.getAllStudents);

//Create a todo.
router.get('/find/:id', StudentController.getSingleStudent);

router.post('/', StudentController.createNewStudent);


module.exports = router;
