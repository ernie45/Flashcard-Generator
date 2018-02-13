/** Require dependenciess */
var fs = require("fs");
var inquirer = require("inquirer"); 
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard"); 

/** Create a basic card using its constructor */
/** "new" keyword intentionally left out */
/** The BasicCard constructor will handle its attachment */
var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");
/** Display contents of the BasicCard */
console.log(`${firstPresident.question}: ${firstPresident.answer}`);


/** Prompt the user a message */ 
inquirer.prompt([
	{
		/** The message displays a list to choose an element from */
		type: "list",
		/** The message's name is cardType */
		name: "cardType",
		/** Here's the actual message */
		message: "Choose a type of flashcard",
		/** These are the choices for the list */
		choices: ["Basic FlashCard", "Cloze FlashCard"] 
	},
	{
		/** This next message is an input */
		type: "input",
		/** Its name is question */
		name: "question",
		/** The user sees this message */
		/** This input allows the user to input variable questions to create cards */
		message: "Text to be displayed on question side"
	},
	{
		/** This is another input message */
		type: "input",
		/** Its name is answer, as it will be the answer to the previous input */
		name: "answer",
		/** Prompt the user its functionality */
		message: "Text to be displayed on answer side"
	}
]).then(function(card){
	/** If the prompt named cardType returns the following */
	if (card.cardType === "Basic FlashCard"){
		/** Create a new BasicCard with the question and answer prompts */
		/** Again, the BasicCard constructor handles adding the "new" keyword */
		var flash = BasicCard(card.question, card.answer);
		/** Save the contents of the Flash card in the BasicCards.txt file */
		/** This will save in the form "question: answer," */
		fs.appendFile("BasicCards.txt",`${card.question}: ${card.answer},`, function(error){
			if (error){
				console.log(error);
			}
		});
	}
	/** If the prompt named cardType returns the following */
	else if (card.cardType === "Cloze FlashCard"){
		/** Create a new instance of ClozeCard with the question and answer prompts */
		/** Remember that ClozeCard constructor handles adding the "new" keyword */
		var flash = ClozeCard(card.question, card.answer);
		/** Append the contents to ClozeCard.txt */
		/** It will append in the form "question: answer," */
		fs.appendFile("ClozeCards.txt",`${card.question}: ${card.answer},`, function(error){
			if (error){
				console.log(error);
			}
		});
	}
});
