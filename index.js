const express = require('express');
const app = express();
const port = process.env.PORT  || 3000

// adding a piece of middleware
// app.use uses the middleware.


const courses = [
  {
    id: 1,
    name : 'this is a name'
  },
  {
    id: 2,
    name: 'three'
  },
  {
    id: 3,
    name: 'four'
  }
]

app.get('/', (req, res)=>{
  res.send('hello world');
})


app.get('/api/courses', (req, res)=>{
  res.send([1,2,4])
});

app.get('/api/courses/:id', (req, res)=>{
  const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('this courses with given id not found')
    res.send(course);


})


app.listen(port, () => console.log(`Running on port ${port}`));
