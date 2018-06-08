var characters = {
	"Futsuko": {
		attraction: 50,
		facemap: "./dat-futsuko.png",
		faces: {
			default: [0,0],
			nice: [2, 4],
			happy: [1,0],
			angry: [2,2],
			awkward: [3, 2],
			concludeYes: [0, 5],
			concludeNo: [4, 0]
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
	}
}
