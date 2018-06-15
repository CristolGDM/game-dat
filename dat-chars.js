var characters = {
	"Futsuko": {
		attraction: 50,
		face: {
			location: "./dat-futsuko-column.png",
			width: 535,
			height: 551
		},
		faces: {
			default: [0,0],
			nice: [2, 4],
			happy: [1,0],
			angry: [2,2],
			awkward: [3,2],
			concludeYes: [0,5],
			concludeNo: [4,0]
		},

		hi: "Hello, nice to meet you!",

		topics: {
			today: {
				name: "today",
				open: "So what did you do today?",
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
				conclude: {
					question: "We should go to that restaurant together next week.",
					success: "Yeah we should! Do you have Instagram?",
					failure: "Oh hmmmm... I'm busy next week... And next month too..."
				}
			},
			weekend: {
				name: "weekend",
				open: "Doing anything cool this weekend?",
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
				conclude: {
					question: "Maybe we can go shopping together and help each other, sounds fun.",
					success: "That's a great idea, I wanted a new dress actually! Do you have Snapchat?",
					failure: "Oh I think I bought enough clothes to last me ten years, at least..."
				}
			},
			hobbies: {
				name: "hobbies",
				open: "What are your hobbies?",
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
				conclude: {
					question: "Well I just rented this new amazing romcom, wanna watch it together?",
					success: "Yeah, definitely! Do you have Facebook?",
					failure: "I've seen it already, sorry."
				}
			}
		}
	},
	"Tsuyoko": {
		attraction: 50,
		face: {
			location: "./dat-tsuyoko-column.png",
			width: 688,
			height: 556
		},
		faces: {
			default: 0,
			nice: 15,
			happy: 17,
			angry: 7,
			awkward: 21,
			concludeYes: 18,
			concludeNo: 2
		},

		hi: "Hey there",

		topics: {
			today: {
				name: "today",
				open: "So what did you do today?",
				text: "Like, I played soccer with my friends and shit",
				answers: [
					["Haha soccer is cool, I do it from time to time too. Who won?", "positive"],
					["I see.", "neutral"],
					["Who won?", "more"],
					["Ugh soccer is a dumb sport.", "negative"],
					["That's why you're so buff! Who won?", "joke"]
				],
				additional: {
					text: "Well I beat the shit out of them, fucking weaklings.",
					answers: [
						["Bet you can't beat me", "positive", "We'll see to that!"],
						["Okay.", "neutral"],
						["Jeez why so competitive, it's annoying", "negative", "Well fuck you too mate"],
						["Oh I see, they were three years old, right?", "joke", "Haha no they were not"]
					]
				},
				conclude: {
					question: "Wanna see if you can beat a grown ass man next time?",
					success: "I'm sure you would like that - you're on!",
					failure: "Wow you managed to make it sound so gross... Thanks but no thanks"
				}
			},
			weekend: {
				name: "weekend",
				open: "Doing anything cool this weekend?",
				text: "Yeah I'm going to the beach and shit",
				answers: [
					["Oh I love going to the beach! For swimming?", "positive"],
					["I see.", "neutral"],
					["Oh what's your plan there?", "more"],
					["Damn you never do anything intellectual, like reading or watching YouTube videos about quantum theory?", "negative"],
					["Oooh, that's why you're so tan. You're going to go there and tan the whole weekend right?", "joke"]
				],
				additional: {
					text: "Well for now the plan is just to do some surfing, barbecue, and getting wasted.",
					answers: [
						["That sounds awesome, I might want to do that too this summer", "positive", "You should! And don't forget to invite me"],
						["Okay.", "neutral"],
						["Jeez that's so dumb.", "negative", "Oh shut up, cuntface."],
						["That's my three favorite hobbies, we have so much in common!", "joke", "Yay, high-five!"]
					]
				},
				conclude: {
					question: "Actually wanna hang out at my place next week? No swimming, but barbecue and getting wasted are definitely possible",
					success: "Sounds great! I'm free Sunday, works for you?",
					failure: "Nah, I'm busy. Dentist appointment."
				}
			},
			hobbies: {
				name: "hobbies",
				open: "What are your hobbies?",
				text: "I'm really into music, but like, weird music",
				answers: [
					["Oh I like weird music too! What's yours?", "positive"],
					["I see.", "neutral"],
					["Like what?", "more"],
					["Meh, if it's not classical you shouldn't even call it 'music'.", "negative"],
					["Oh really? Weird enough so if you tell me I'll run away or not?", "joke"]
				],
				additional: {
					text: "Well actually you probably don't know but it's... it's the Denpa Gumi. Don't make fun of me.",
					answers: [
						["Oh my god it's my favorite group too, they're amazing!", "positive", "Really?! That's our shameful secret then!"],
						["Okay.", "neutral"],
						["Oh god, seriously? Are you fucking five years old?", "negative", "Why, that's your type, pedo?"],
						["Hahahaha that's amazing, didn't expect that, I like it!", "joke", "Yeah, that's why I never tell people"]
					]
				},
				conclude: {
					question: "I heard Denpa Gumi had an event in Akiba next Tuesday, wanna go check it out?",
					success: "I was already planning on going! Where do you wanna meet?",
					failure: "Ah I got my part-time work on that day, sorry."
				}
			}
		}
	}
}
