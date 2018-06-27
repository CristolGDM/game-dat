# A web-based dating "simulator"

## Why I made this game
I want to make games. Huge games, epic games. The best games. I want to ChronoTriggerSkyrimSuikoden in pixelart open world engaging stories best combat system ever made.
So, every time I sit down and decide to finally make that game, I try for a couple days and realize I have no idea what I'm doing and give up.
But I recently noticed two things:
- I'm a web developer, and kinda good at what I'm doing. While I don't know where to start when using Unity or UE or RPG Maker, if I think about it as an advanced website it kinda makes sense, and I can see what to do
- When learning something, you don't start with the most complex project first. You start with easy stuff, and increase complexity bit by bit.

So I found a book that focused on web technologies, and had a project based progression ([The Web Game Developer's Cookbook: Using JavaScript and HTML5 to Develop Games](https://www.amazon.com/dp/B00C0OBZIU/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)). First "real" project was an adventuring game: talk to people, go in different rooms, use items, etc

I decided to focus first on the "talk to people" part, and it soon became that game

## What this game is
It's a prototype/MVP of a dating game. You can:

- Choose which character you want to talk to
- Talk with that character about different topics
- Get a positive/negative reaction based on what you say and said before
- Get a date or not with a given character

## What I learned

You need a strong model before starting

But difficult to have strong model until you start; think there might be value in making a prototype such as this, and THEN making your model and engine based on what you learned

Learned a lot about OOP; it's not something I use in my daily work, and I actually didn't use it in this project (see below), but the more I advanced, the more I saw how OOP would have made things easier, and even now, every issue I'm still concerned about could have been fixed by OOP.

This probably relates to the above issue: OOP is nice, but I feel like it is difficult to set up before you *really* know how your game is going to be structured. I'll definitely try for my next project

## What I wished I had done differently

Wish I had found a way for "character choice" and "answer choice" to work similarly in the dialog screen

Wish I had done the code differently. I probably should have OOP'd a lot more things, for example adding the attraction functions to a character object, and each character being a new instance of that object, which would have increased modularity. Also "character choice" and "answer choice" being instances of a "player choice" object would probably have made the whole thing easier

## Disclaimer
There is no sex sorry
Bad humor
Learning project, might not be that fun
Not very long
Not my assets, comes from game, and haven't played game
