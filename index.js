const Joi = require('joi');
const express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const studentRouter = require('./routes/student');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', studentRouter);
// const courses = [];

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter);

// app.get('/api/courses', (req, res) => {
//   res.json(courses);
// });

// app.post('/api/courses', (req, res) => {
//  const course = { courseid: courses.length + 1, firstname: req.body.name};
//  courses.push(course);
//  res.send(course);
// });

// app.post('/api/courses/:id', (req, res) => {
//   const course = { courseid: courses.length + 1, firstname: req.body.name};
//   courses.push(course);
//   res.send(course);
//  });

// app.get('/api/courses/:id/:name', (req, res) => {
//   res.send(req.params);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;