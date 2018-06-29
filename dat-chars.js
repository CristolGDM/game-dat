var characters = {
	"Futsuko": {
		name: "Futsuko",
		attraction: 50,
		face: {
			location: "./dat-futsuko-column-redux.png",
			width: 540,
			height: 550
		},
		faces: {
			default: -.06,
			nice: 14.3,
			happy: 28.6,
			angry: 42.9,
			mad: 57.14,
			awkward: 71.45,
			concludeYes: 85.72,
			concludeNo: 100.02
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
		name: "Tsuyoko",
		attraction: 50,
		face: {
			location: "./dat-tsuyoko-column-redux.png",
			width: 688,
			height: 562
		},
		faces: {
			default: 0,
			nice: 14.29,
			happy: 28.57,
			angry: 42.87,
			mad: 57.15,
			awkward: 71.44,
			concludeYes: 85.73,
			concludeNo: 100
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
					success: "I-I'm sure you would like that - you're on!",
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
					["You never do anything intellectual, like reading or watching YouTube videos about quantum theory?", "negative"],
					["Oh, that's why you're so tan! I thought maybe you were a bodybuilder.", "joke"]
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
					success: "S-s-sounds great! I'm free Sunday, works for you?",
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
						["Sounds like a candy name, it HAS to be good", "joke", "Yeah, that's why I never tell people"]
					]
				},
				conclude: {
					question: "I heard Denpa Gumi had an event in Akiba next Tuesday, wanna go check it out?",
					success: "A-actually I was already planning on going! Where do you wanna meet?",
					failure: "Ah I got my part-time work on that day, sorry."
				}
			}
		}
	},
	"Hikiko": {
		name: "Hikiko",
		attraction: 50,
		face: {
			location: "./dat-hikiko-column-redux.png",
			width: 586,
			height: 560
		},
		faces: {
			default: -.01,
			nice: 14.28,
			happy: 28.58,
			angry: 42.86,
			mad: 57.14,
			awkward: 71.43,
			concludeYes: 85.73,
			concludeNo: 100.02
		},

		hi: ["Hello, so nice to meet you!", "I'm Hikiko! But you can call me Hiki!", "Or not it's fine!", "I'm over 18!", "How are you?!"],

		topics: {
			today: {
				name: "today",
				open: "So what did you do today?",
				text: ["I didn't do anything it was amazing! Like I just stayed home and watched anime", "Omg lol so me right haha!"],
				answers: [
					["Yay I like a good lazy day too! What did you watch?", "positive"],
					["I see.", "neutral"],
					["What did you watch?", "more"],
					["Ugh that sounds boring", "negative"],
					["Oh aren't you a sweet couch potato haha! What did you watch?", "joke"]
				],
				additional: {
					text: ["Well I watch a bit of everything!", "Like I really like shounen like my favorite is One Piece and I think Sanji is so cool!", "And Naruto too it's my favorite!"],
					answers: [
						["Oooh I really like those too!", "positive", ["Seriously?!"," Omg that's crazy!!","Do you like manga?!","You should read Emergence!"]],
						["Okay.", "neutral"],
						["Jeez that's fucking normie stuff", "negative", ["Huh?", "What's a normie?", "That's very rude fedora-san!"]],
						["My favorite anime is Bojack Horseman", "joke", ["Oh what's that?!", "Is it that horsegirl idol anime?!", "Or is he fighting people or something?!", "I'll watch!"]]
					]
				},
				conclude: {
					question: "I'm good at doing nothing, let's do it together",
					success: ["Damn right boy.", "We'll 'do it', better stretch.", "(I'm totally over 18 by the way)"],
					failure: ["Ummm thanks no thanks!", "I prefer doing nothing alone!", "Or at least not with you!"]
				}
			},
			weekend: {
				name: "weekend",
				open: "Doing anything cool this weekend?",
				text: ["Ummm my plan is to just stay in my room and play games!", "Like lots of games!", "I'm such a roxxor lol xoxo l33t omg!"],
				answers: [
					["Girl, I love playing games! What do you play?", "positive"],
					["I see.", "neutral"],
					["What are you gonna play?", "more"],
					["Don't speak like that, you're giving me cancer", "negative"],
					["Play games like Othello? Such a gamer!", "joke"]
				],
				additional: {
					text: ["I want to play Dark Souls!","But I just finished my 10th playthrough SL1 so I'm a bit bored!","So maybe Skyrim!","My 640 modlist is almost ready, finally managed to integrate SoS and SLab!","Just wondering if FlowerGirls is worth it!"],
					answers: [
						["I love those games, and that sounds very creative, congrats to you.", "positive", ["Yay I can express myself!","SLsubmit is very good too!","I can make you into a NPC!"]],
						["Okay.", "neutral"],
						["Git gud cunt.", "negative", ["Oh you speak like the guy I invaded last night", "Is that you?"]],
						["Oh I like girls who sell flowers", "joke", ["Yay they sell their flower yay!", "They're so pretty!", "And they do what I tell them!"]]
					]
				},
				conclude: {
					question: "What about you show me how good you are at those games?",
					success: ["Oh yeah baby.","I'll show you things even LoversLab wouldn't dare showing.","I'm over 18."],
					failure: ["Oh sorry I don't play with my inferiors...", "But keep trying!"]
				}
			},
			hobbies: {
				name: "hobbies",
				open: "What are your hobbies?",
				text: ["Every nerd stuff", "Because I'm a big nerd!", "Very nerdy nerd nerd!"],
				answers: [
					["I'm a nerd too! Anything in particular?", "positive"],
					["I see.", "neutral"],
					["Anything in particular?", "more"],
					["Oh jesus fucking christ you're one of those", "negative"],
					["Wow calm down Nerdy McNerdface", "joke"]
				],
				additional: {
					text: ["I really love fanart!", "And cosplay!", "Of everything!", "Do you know ClopClop?!"],
					answers: [
						["I really love fanart too! You should show me your favorites!", "positive", ["Oh yay yay daddy yay!","Like there is this one with Rainbowdash and a bear!", "It's like a Romero movie it's beautiful!"]],
						["Okay.", "neutral"],
						["You talk too fucking mucchhhh", "negative", ["Yay yay thank you!"]],
						["You should cosplay then! Like Kratos, would suit you", "joke", ["Oh you think I would be cute?!","Thank you daddy yay thank you!","You can cosplay as Mami Tomoe!","She has a really cool scene!"]]
					]
				},
				conclude: {
					question: "Actually, wanna prepare a cosplay together for next summer?",
					success: ["Fuck yeah I want", "I'll cosplay as a poney", "Cloppyclop me until I walk as straight as Elton John.", "It's okay because I'm over 18."],
					failure: ["Umm I don't think you can do cosplay sorry...", "Unless you do a Jabba cosplay!", "But I don't like Star Wars sorry!"]
				}
			}
		}
	},
	"Otoko": {
		name: "Otoko",
		attraction: 30,
		face: {
			location: "./dat-otoko-column-redux.png",
			width: 692,
			height: 559
		},
		faces: {
			default: 0,
			nice: 14.3,
			happy: 28.56,
			angry: 42.88,
			mad: 57.11,
			awkward: 71.42,
			concludeYes: 85.68,
			concludeNo: 99.98
		},

		hi: ["Umph, what do you want?"],

		topics: {
			today: {
				name: "today",
				open: "So what did you do today?",
				text: ["Why do you care?", "We played soccer at the beach.", "With friends.", "Whatever."],
				answers: [
					["Oh I like playing soccer too, how did it go?", "positive"],
					["I see.", "neutral"],
					["How did it go?", "more"],
					["Did you bore them to death too?", "negative"],
					["Wow don't sound too excited!", "joke"]
				],
				additional: {
					text: ["We lost against one girl.", "She was so annoying.", "Not like I care"],
					answers: [
						["It's okay, I'll help you next time!", "positive", ["Yeah why not.", "If you want."]],
						["Okay.", "neutral"],
						["Haha fucking weakling", "negative", ["Huh?", "You're noisy."]],
						["Damn, losing against a little girl must hurt.", "joke", ["I didn't say she was a little girl.", "She wasn't.", "Seriously."]]
					]
				},
				conclude: {
					question: "Can you show me how to play soccer one of those days?",
					success: ["Hmmm sure.","Always up for helping cuties.", "I mean you're not only cute.", "Well you are - oh jeez..."],
					failure: ["Nah."]
				}
			},
			weekend: {
				name: "weekend",
				open: "Doing anything cool this weekend?",
				text: ["Why do you want to know?","Probably just going downtown.", "Looking cool."],
				answers: [
					["Oh I'm going downtown too! Where?", "positive"],
					["I see.", "neutral"],
					["Where exactly?", "more"],
					["Oh come on you're a fucking cliché.", "negative"],
					["Nice! Wearing a cape and shit?", "joke"]
				],
				additional: {
					text: ["I like sitting near the station.", "Looking at the sky.", "Especially if it rains a bit.", "I look dark and brooding.", "Damn cool."],
					answers: [
						["Well if it's your thing, more power to you!", "positive", ["Yeah it's my thing.","Just wish I had someone to take pictures.", "It's hard to take brooding selfies."]],
						["Okay.", "neutral"],
						["And you just sit down like that? Isn't it fucking boring?", "negative", ["You wouldn't understand.", "It's an intellectual thing."]],
						["Must be hard to take selfies haha", "joke", ["Yes it is.", "I keep practicing though."]]
					]
				},
				conclude: {
					question: "Maybe I can come with you and take your pictures.",
					success: ["Yeah we can take pictures together.","I mean, pictures of me.", "But together would be better.", "Oh god I fucked it up again..."],
					failure: ["I look better when you're not here.", "No offense.", "Kinda."]
				}
			},
			hobbies: {
				name: "hobbies",
				open: "What are your hobbies?",
				text: ["Only cool things.", "I like metal.", "But not violent metal.", "Only cool metal.", "Also not nerdy stuff."],
				answers: [
					["Oh I went to a metal concert recently! What band do you like?", "positive"],
					["I see.", "neutral"],
					["What band do you like?", "more"],
					["You're such a peasant, real metal people love Amon Amarth", "negative"],
					["Oh like copper? Brass?", "joke"]
				],
				additional: {
					text: ["Like I don't like Babymetal.", "Definitely not.", "Not listening to them every day."],
					answers: [
						["Oh it's totally not my favorite band too!", "positive", ["Stop trying so hard.", "But you're cool."]],
						["Okay.", "neutral"],
						["Can I punch your face?", "negative", ["Try it and I'll destroy you.", "By calling the police."]],
						["You should try their costumes, would look good on you!", "joke", ["...!", "I definitely never tried that.", "I kind of have big thighs.", "Didn't fit."]]
					]
				},
				conclude: {
					question: "What about not listening to Babymetal together?",
					success: ["Hmph, if you insist.", "But I definitely don't like them.", "Same as I definitely don't like you."],
					failure: ["Try it by yourself first.", "I'll join you never."]
				}
			}
		}
	}
}
