var DatingController = function($scope, $http){

	/*******************/
	/* Local variables */
	/*******************/
	var view = this;
	var currentTopic;
	var currentCharacter;
	var plannedDates = 0;

	/*******************/
	/* Scope variables */
	/*******************/
	view.currentFace = 0;
	view.selectedOption = 0;
	view.face = {width: 100, height: 100};
	view.remainingDialog = [];
	view.selectCharacterText = "";

	/*******************/
	/* Scope functions */
	/*******************/
	view.$onInit = onInit;
	view.advanceDialog = advanceDialog;
	view.getAttractionPercentage = getAttractionPercentage;
	view.processAnswer = processAnswer;
	view.selectCharacter = selectCharacter;

	/*******************/
	/* Key  listeners  */
	/*******************/
	window.onkeyup = function(e) {
		var key = e.keyCode ? e.keyCode : e.which;

		var upKey = 38;
		var downKey = 40;
		var enterKey = 13;
		var spaceKey = 32;

		$scope.$apply(function(){
			/* We get the number of displayed options */
			var optionsNumber = document.getElementsByClassName('option').length;

			/* No displayed options can either mean one character is speaking (in which case we just advance) or there is absolutely nothing else to do (in which case we don't do anything) */
			if (optionsNumber === 0) {
				if(view.remainingDialog.length > 0) {
					advanceDialog(view.remainingDialog);
				}
				else {
					return;
				}
			}

			else {

				/* Up and down navigate through the options; space and enter select the current option */
				if (key == upKey) {
					view.selectedOption = view.selectedOption === 0 ? optionsNumber -1 : view.selectedOption -1;
				} else if (key == downKey) {
					view.selectedOption = view.selectedOption === optionsNumber -1 ? 0 : view.selectedOption +1;
				} else if (key == enterKey || key == spaceKey) {
					if (view.selectCharacterText.length >0) {
						selectCharacter(view.characters[view.selectedOption]);
					}
					else {
						processAnswer(view.heSays[view.selectedOption]);
					}
				}
			}
		})
}

	/*******************/
	/* Local functions */
	/*******************/

	/*
	 * Sets the dialog for the interlocutor. If there is just one sentence it processes it as is, else it displays the first sentence and saves the remainder
	 * @param {string|array} text - Text to process
	 */
	function advanceDialog(text){
		if(typeof text === 'string'){
			view.remainingDialog = [];
			view.sheSays = '"' + text + '"';
		}
		else if (text.length !== 0) {
			view.sheSays = '"' + text[0] + '"';
			view.remainingDialog = text;
			view.remainingDialog.shift();
		}
	}

	/*
	 * Changes current expression by the given amount, and adjust character's face based on the amount changed
	 * @param {number} amount - Amount to change the attraction by
	 */
	function changeAttraction(amount) {
		switch (amount){
			case 0:
				view.currentFace = currentCharacter.faces.default;
				break;

			case -5:
				view.currentFace = currentCharacter.faces.awkward;
				break;

			case -10:
				view.currentFace = currentCharacter.faces.angry;
				break;

			case -15:
				view.currentFace = currentCharacter.faces.mad;
				break;

			case 5:
				view.currentFace = currentCharacter.faces.nice;
				break;

			case +10:
				view.currentFace = currentCharacter.faces.happy;
				break;

		}

		currentCharacter.attraction += amount;
	}

	/*
	 * Called when the current character reaches the end of its conversation
	 */
	function finishCharacter(){
		/* Removes the character from the list of available characters */
		var index = view.characters.indexOf(currentCharacter.name);
		if (index !== -1){
			view.characters.splice(index, 1);
		}

		var endingText = "";

		/* Adds some text depending on whether the player successfully concluded with the current character or not */
		if (currentCharacter.concluded) {
			endingText = "Looks like you got a date with " + currentCharacter.name + ", congrats!";
			plannedDates += 1;
		}
		else {
			endingText = "Looks like you ran out of things to say..."
		}

		/* If there is no more characters, we finish the game and reminds how many dates the player got */
		if (view.characters.length === 0) {
			endingText += " And it looks like you spoke with everybody!";
			if (plannedDates === 0) {
				endingText += " Too bad you couldn't get any date... Hopefully you will have a better time next time!";
			}
			else if (plannedDates === 1) {
				endingText += " You even have a date planned soon, better get ready!";
			}
			else {
				endingText += " You even have " + plannedDates + " dates planned, someone's going to be busy!";
			}
		}
		/* Else the player can speak with someone else */
		else {
			endingText += " Want to speak to someone else?";
		}

		view.selectCharacterText = endingText;
	}

	/*
	 * Generates the main hub from which topics are selected
	 * @param {String} [text] - Text to be displayed as the girl's dialog. If nothing, it defaults to "..."
	 */
	function generateHub(text) {
		currentTopic = null;
		if (text === undefined || text.length === 0) {
			text = "...";
		}

		var answers = [];

		for (topicName in currentCharacter.topics) {
			let topic = currentCharacter.topics[topicName];
			/* Once a topic is closed, you can't talk about it anymore */
			if (!topic.closed) {
				answers.push([topic.open, "topic", topic.name]);
			}
			/* But you can try to conclude based on it, if you asked for more info */
			else if (topic.more && !topic.rejected) {
				answers.push([topic.conclude.question, "conclude", topic.name])
			}
		}

		generateScreen(text, answers);
	}

	/*
	 * Generates a new screen
	 * @param {String} 	text 	- text to display as the girl's conversation
	 * @param {array} 	answers - answers to offer as choice to the user
	 */
	function generateScreen(text, answers) {
		if (answers == null) answers = [];

		var displayedAnswers = [];
		view.selectedOption = 0;

		for (var i = 0; i < answers.length; i++) {
			displayedAnswers.push(answers[i]);
		}

		/* The user has the option to directly switch to a non-closed topic anytime */
		if (currentTopic !== null && currentTopic !== undefined && currentTopic.name !== undefined) {
			if (currentTopic.name !== "today" && !currentCharacter.topics.today.closed) {
				displayedAnswers.push(["So what did you do today?", "topic", "today"]);
			}
			if (currentTopic.name !== "weekend" && !currentCharacter.topics.weekend.closed) {
				displayedAnswers.push(["Doing anything cool this weekend?", "topic", "weekend"]);
			}
			if (currentTopic.name !== "hobbies" && !currentCharacter.topics.hobbies.closed) {
				displayedAnswers.push(["What are your hobbies?", "topic", "hobbies"]);
			}
		}

		/* If there is no answers, we close that character */
		if (displayedAnswers.length === 0) {
			finishCharacter();
		}

		/* Else we prepare the player answers, and start advancing the dialog */
		advanceDialog(text);
		view.heSays = shuffle(displayedAnswers);
	}

	/* Gets the current attraction for that character */
	function getAttractionPercentage() {
		if (currentCharacter == null) {
			return 0
		};

		return Math.min(100,Math.max(0, currentCharacter.attraction));
	}

	/*
	 * Called when starting the app
	 */
	function onInit() {
		view.characters = shuffle(Object.keys(characters));

		view.preloadImages = [];
		for (character in characters) {
			view.preloadImages.push(characters[character].face);
		}

		/* We get a random image from reddit as background */
		$http.get('https://www.reddit.com/r/ImaginaryCityscapes/hot.json?sort=new')
			.then(function(response){
				var array = response.data.data.children;
				var index = Math.floor(Math.random()*array.length)
				view.selectCharacterText = "Such a nice day in " + array[index].data.title.split(" by")[0] + "... Who are you going to talk to?";
				view.backgroundImage = array[index].data.url;
				}
			);
	}

	/*
	 * Called when the user clicks on an answer
	 * Depending on the answer, it adjusts attraction ratings and generates a new screen via generateScreen or generateHub
	 * @param {array} answer - the answer to process. answer[0] is the text shown to the user, answer[1] is the kind of answer it is, and answer[2](optional) is the girl's text following this answer (for most answers) or the topic selected (for topic answers)
	 */
	function processAnswer(answer) {
		switch (answer[1]){
			/* Selecting a new topic */
			case "topic":
				/* If you were already talking about something else, the topic is closed, and you lose some attraction */
				if (currentTopic != null && currentTopic.name != null) {
					changeAttraction(-5);
					currentTopic.closed = true;
				}
				else {
					changeAttraction(0);
				}
				currentTopic = currentCharacter.topics[answer[2]];
				generateScreen(currentTopic.text, currentTopic.answers);
				break;

			/* Bringing stuff back to you in a positive way */
			case "positive":
				/* If it's still the first part of the topic conversation, we go to the second part, mark that the user brought back to himself, and give some attraction */
				if (!currentTopic.more) {
					currentTopic.more = true;
					currentTopic.selfed = true;
					changeAttraction(5);
					generateScreen(currentTopic.additional.text, currentTopic.additional.answers);
				}
				/* On the second part, the user lose attraction if he talked about himself twice, else he gains some. We mark the topic as closed, and go back to the hub */
				else {
					if(currentTopic.selfed){
						changeAttraction(-5)
					}
					else {
						changeAttraction(10)
					}
					currentTopic.closed = true;
					currentTopic = null;
					generateHub(answer[2]);
				}
				break;

			case "joke":
				/* If it's still the first part of the topic conversation, we go to the second part, mark that the user joked, and give some attraction */
				if (!currentTopic.more) {
					currentTopic.more = true;
					currentTopic.joked = true;
					changeAttraction(5);
					generateScreen(currentTopic.additional.text, currentTopic.additional.answers);
				}
				/* On the second part, the user lose attraction if he joked twice, else he gains some. We mark the topic as closed, and go back to the hub */
				else {
					if(currentTopic.joked){
						changeAttraction(-5)
					}
					else {
						changeAttraction(10)
					}
					currentTopic.closed = true;
					currentTopic = null;
					generateHub(answer[2]);
				}
				break;

			/* Neutral "asking for more", we just go to the next screen */
			case "more":
				currentTopic.more = true;
				changeAttraction(0);
				generateScreen(currentTopic.additional.text, currentTopic.additional.answers);
				break;

			/* Neutral answer, we close the topic and go back to the hub, no attraction change */
			case "neutral":
				currentTopic.closed = true;
				changeAttraction(0);
				generateHub();
				break;

			/* Being a negative poopoo downer, loss of attraction, topic closed and back to the hub */
			case "negative":
				if (!currentTopic.more) {
					changeAttraction(-10);
					currentTopic.more = true;
					currentTopic.negatived = true;
					generateScreen(currentTopic.additional.text, currentTopic.additional.answers);
				}
				else {
					if(currentTopic.negatived){
						changeAttraction(-15)
					}
					else {
						changeAttraction(-10)
					}
					currentTopic.closed = true;
					currentTopic = null;
					generateHub(answer[2]);
				}
				break;

			case "conclude":
				if (currentCharacter.attraction >= 70) {
					view.currentFace = currentCharacter.faces.concludeYes;
					currentCharacter.concluded = true;
					generateScreen(currentCharacter.topics[answer[2]].conclude.success);
				}
				else {
					if(currentCharacter.topics[answer[2]].negatived) changeAttraction(-5);
					currentCharacter.topics[answer[2]].rejected = true;
					view.currentFace = currentCharacter.faces.concludeNo;
					generateHub(currentCharacter.topics[answer[2]].conclude.failure);
				}
		}
	}

	/*
	 * Selects a given character
	 * @param {string} characterName - Name of the character to choose
	 */
	function selectCharacter(characterName) {
		currentCharacter = characters[characterName];
		view.face = currentCharacter.face;
		view.currentFace = currentCharacter.faces.default;
		view.selectCharacterText = "";

		/* We generate the first hub */
		generateHub(currentCharacter.hi);
	}

	/*
	 * Shuffles an array
	 * Copied almost directly from SE
	 */
	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
}

angular.module('datingApp',[])
	.controller('DatingController', ['$scope', '$http', DatingController]);

angular.element(document).ready(function () {
	angular.bootstrap(document, ['datingApp']);
});