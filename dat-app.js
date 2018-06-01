	/*******************/
	/* Local variables */
	/*******************/

	/*
	 * Conclude
	 * Fix face alignment
	 * Better font
	 * Better answer display
	 * Selection menu
	 * More characters
	 * Can use keyboard
	 */

var DatingController = function($scope, $http){
	var view = this;

	/*******************/
	/* Scope variables */
	/*******************/

	/*******************/
	/* Scope functions */
	/*******************/
	view.$onInit = onInit;
	view.currentFace = [0, 0];
	view.getAttractionPercentage = getAttractionPercentage;
	view.processAnswer = processAnswer;

	/*******************/
	/* Local variables */
	/*******************/
	var currentTopic;
	var currentCharacter;

	var characters = {
		"Futsuko": {
			attraction: 50,
			faces: {
				default: [0,0],
				nice: [2, 4],
				happy: [1,0],
				angry: [2,2],
				awkward: [3, 2],
				concludeYes: [0, 5],
				concludeNo: [4, 0]
			},

			topics: {
				today: {
					name: "today",
					text: "I went to a Thai restaurant with my friends, it was fun!",
					answers: [
						["Oh I love Thai food! Where was it?", "positive"],
						["I see.", "neutral"],
						["Sounds good, what did you eat?", "more"],
						["Damn I hate spicy food...", "negative"],
						["Wow you went to Thailand just for lunch that's cool!", "joke"]
					],
					additional: {
						text: "It's that small restaurant near the station, I had their green curry it was amazing",
						answers: [
							["Well I would love to try", "positive", "You should!"],
							["Okay.", "neutral"],
							["Ah I hate that place", "negative", "Ah, I see..."],
							["Ah, green poop tonight haha!", "joke", "Nooo, why are you saying that haha!"]
						]
					},
					closed: false,
					more: false,
					joked: false,
					selfed: false
				},
				weekend: {
					name: "weekend",
					text: "Hmmm I'll probably go do some shopping with my sister.",
					answers: [
						["Great, I love buying new clothes too! What will you get?", "positive"],
						["I see.", "neutral"],
						["What are you thinking of buying?", "more"],
						["It's kind of a waste to spend that much time shopping around, just decide beforehand what you want and buy it...", "negative"],
						["Shopping for a car? A boat? I can give you advice about boats if you want.", "joke"]
					],
					additional: {
						text: "It's spring, and I don't fit into anything from last year, I reaaaally need a bunch of new clothes.",
						answers: [
							["I understand, I'm totally the same, I'm thinking of getting a full new wardrobe at that point.", "positive", "Yes but that's the fun part of it!"],
							["Okay.", "neutral"],
							["It's kind of a waste of money no?", "negative", "I guess..."],
							["Ah, someone has been eating too much mac & cheese, I see.", "joke", "Nooo, not that much!"]
						]
					},
					closed: false,
					more: false,
					joked: false,
					selfed: false
				},
				hobbies: {
					name: "hobbies",
					text: "I like music, movies, going out.",
					answers: [
						["Oh I'm really into movies actually, what's your favorite?", "positive"],
						["I see.", "neutral"],
						["What's your favorite movie?", "more"],
						["That's boring.", "negative"],
						["Oh I've never met someone who liked music AND movies, it's amazing!", "joke"]
					],
					additional: {
						text: "I really liked PS I love you, I cried so much at this movie.",
						answers: [
							["Yeah I understand, I cried a lot too actually", "positive", "Haha we're the same!"],
							["Okay.", "neutral"],
							["Ugh of course a chick flick.", "negative", "Okay..."],
							["Yeah I understand, I cried almost as much as when I watched the Spongebob movie.", "joke", "Haha what are you saying!"]
						]
					},
					closed: false,
					more: false,
					joked: false,
					selfed: false
				}
			}
		}
	}

	/*******************/
	/* Local functions */
	/*******************/

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
	 * Generates the main hub from which topics are selected
	 * @param {String} [text] - Text to be displayed as the girl's dialog. If nothing, it defaults to "..."
	 */
	function generateHub(text) {
		currentTopic = null;
		if (text === undefined || text.length === 0) {
			text = "...";
		}

		var answers = [];

		/* Once a topic is closed, you can't talk about it anymore */
		if (!currentCharacter.topics.today.closed) {
			answers.push(["So what did you do today?", "topic", "today"]);
		/* But you can try to conclude based on it */
		} else if (currentCharacter.topics.today.more) {
			answers.push(["We should go to that restaurant together next week.", "conclude", "today"]);
		}

		if (!currentCharacter.topics.weekend.closed) {
			answers.push(["Doing anything cool this weekend?", "topic", "weekend"]);
		} else if (currentCharacter.topics.weekend.more) {
			answers.push(["Maybe we can go shopping together and help each other, sounds fun.", "conclude", "weekend"]);
		}

		if (!currentCharacter.topics.hobbies.closed) {
			answers.push(["What are your hobbies?", "topic", "hobbies"]);
		} else if (currentCharacter.topics.hobbies.more) {
			answers.push(["Well I would be willing to watch it again with someone cool, if you're interested.", "conclude", "hobbies"]);
		}

		generateScreen(text, answers);
	}

	/*
	 * Generates a new screen
	 * @param {String} 	text 	- text to display as the girl's conversation
	 * @param {array} 	answers - answers to offer as choice to the user
	 */
	function generateScreen(text, answers) {
		var displayedAnswers = [];

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
		view.sheSays = text;
		view.heSays = shuffle(displayedAnswers);
	}

	function getAttractionPercentage() {
		return Math.min(100,Math.max(0, currentCharacter.attraction));
	}

	/*
	 * Called when starting the app
	 */
	function onInit() {
		currentCharacter = characters["Futsuko"];

		/* We generate the first hub */
		generateHub();

		/* We get a random image from reddit as background */
		$http.get('https://www.reddit.com/r/ImaginaryCityscapes/hot.json?sort=new')
			.then(function(response){
				var array = response.data.data.children;
				var index = Math.floor(Math.random()*array.length)
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
					changeAttraction(5);
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
				changeAttraction(0)
				generateScreen(currentTopic.additional.text, currentTopic.additional.answers);

			/* Neutral answer, we close the topic and go back to the hub, no attraction change */
			case "neutral":
				currentTopic.closed = true;
				changeAttraction(0)
				generateHub();
				break;

			/* Being a negative poopoo downer, loss of attraction, topic closed and back to the hub */
			case "negative":
				changeAttraction(-10)
				currentTopic.closed = true;
				generateHub(answer[2]);
				break;
		}
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