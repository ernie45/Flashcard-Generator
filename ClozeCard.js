/** Define a ClozeCard object */
function ClozeCard(text, cloze){
	var testText = [];
	try{
		/** If cloze is not in the main text */
		if (!text.includes(cloze)){
			/** Throw the following error */
			/** The quotations are specified as escape characters */
			throw "\"" + cloze + "\" is not in \"" + text + "\"";
		}
		var lines = [];
		/** If already has a "new" keyword */
		if (this instanceof ClozeCard){
			/** Define the fulltext */
			this.fullText = text;
			/** Define the part to be found within the full text */
			this.cloze = cloze;
			/** Split the text into two pieces where the cloze is found */
			temp = text.split(this.cloze);
			/** Define the partial text as the first element in the temp array */
			/** Followed by a blank space where the cloze belongs */
			/** Followed by the second cut piece from temp */
			this.partial = temp[0] + drawLines(this.cloze) + temp[1];
		}
		/** If the object has no "new" keyword, attach it */
		else{
			return new ClozeCard(text, cloze);
		}
	}
	catch (error){
		console.log(error);
	}


	/** Takes in a text */
	function drawLines(n){
		/** Traverses the text's length */
		for (var i = 0; i < n.length; i++){
			/** Creates a space for each letter in the argument */
			lines.push("_");
		}
		/** This is the product */
		
		return lines.join("");
	};
};
module.exports = ClozeCard; 