function ClozeCard(text, cloze){
	var clozeInText = false;
	var testText = [];
	var textSplit = text.split(" ");
	for (var i = 0; i < textSplit.length; i++){
		if (textSplit[i] === cloze){
			clozeInText = true;
		}
	}
	try{
		if (!clozeInText){
			throw "\"" + cloze + "\" is not in \"" + text + "\"";
		}
		var lines = [];
		if (this instanceof ClozeCard){
			this.fullText = text;
			this.cloze = cloze;
			temp = text.split(this.cloze);
			this.partial = temp[0] + drawLines(this.cloze) + temp[1];
		}
		else{
			return new ClozeCard(text, cloze);
		}
	}
	catch (error){
		console.log(error);
	}
	function drawLines(n){
		for (var i = 0; i < n.length; i++){
			lines.push("_");
		}
		return lines.join("");
	};
};
module.exports = ClozeCard; 