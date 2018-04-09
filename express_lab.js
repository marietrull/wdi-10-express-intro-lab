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

//MAGIC EIGHT BALL

const magicAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:question', (req,res) => {
	const magicQuest = req.params.question;
	const randNum = Math.floor(Math.random()*20);
	const randAnswer = magicAnswers[randNum]; 
	res.send('Question: ' + magicQuest + 'Answer: ' + randAnswer);
	
})


app.listen(3000, () => {
	console.log('Server is listening on Port 3000');
	
})