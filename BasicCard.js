/** A basic card object takes in two parameters */
/** The front is the question itself */
/** The back is the answer to the question */
function BasicCard(question, answer){
	/** If the created BasicCard has a "new" instance attached to it */
	if (this instanceof BasicCard){
		
		/** Create instances of the content */
		this.question = question;
		this.answer = answer;
	}
	/** If the Object doesn't contain a "new" keyword */
	else {
		/** Attach a "new" keyword to it */
		/** This is in case the coder forgets to add new to it */
		return new BasicCard(question, answer);
	}
};
module.exports = BasicCard;