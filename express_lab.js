const express = require('express'); 
const app = express(); 

//Greetings App

const greeting = ['Marie', 'Louise', 'Trull'];

app.get('/greeting/:name', (req, res) => {
  res.send('Hello ' + greeting[req.params.name])
});


//TIP CALCULATOR

app.get('/tipCalc/:total/:tip', (req, res) => {
	const total = req.params.total;
	const tipPerc = req.params.tip;
	const tipAmount = total/tipPerc;
	//const tip = req.params.tip;
 	res.send('Tip = ' + tipAmount);
});


app.listen(3000, () => {
	console.log('Server is listening on Port 3000');
	
})