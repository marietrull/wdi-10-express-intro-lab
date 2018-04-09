const express = require('express'); 
const app = express(); 

//Greetings App

const greeting = ['Marie', 'Louise', 'Trull'];

app.get('/greeting/:name', (req, res) => {
  res.send('Hello ' + greeting[req.params.name])
});

app.listen(3000, () => {
	console.log('Server is listening on Port 3000');
	
})