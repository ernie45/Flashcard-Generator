var fs = require("fs");
var inquirer = require("inquirer"); 
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard"); 
var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front + ": " + firstPresident.back); 
inquirer.prompt([
	{
		type: "list",
		name: "cardType",
		message: "Choose a type of flashcard",
		choices: ["Basic FlashCard", "Cloze FlashCard"] 
	},
	{
		type: "input",
		name: "question",
		message: "Text to be displayed on front side"
	},
	{
		type: "input",
		name: "answer",
		message: "Text to be displayed on back side"
	}
]).then(function(card){
	if (card.cardType === "Basic FlashCard"){
		var flash = BasicCard(card.question, card.answer);
		fs.appendFile("BasicCards.txt", card.question + ": " + card.answer + ", ", function(error){
			if (error){
				console.log(error);
			}
		});
	}
	else if (card.cardType === "Cloze FlashCard"){
		var flash = ClozeCard(card.question, card.answer);
		fs.appendFile("ClozeCards.txt", card.question + ": " +  card.answer + ", ", function(error){
			if (error){
				console.log(error);
			}
		});
	}
});
