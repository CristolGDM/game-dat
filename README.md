# A web-based conversation "simulator"

## Why I made this game
I want to make games. Huge games, epic games. The best games. I want to make cyberpunk Skyrim in Chrono Trigger pixelart with Suikoden engaging stories and the best combat system ever made.
So, every time I sit down and decide to finally make that game, I try for a couple days and realize I have no idea what I'm doing and give up.
But I recently realized two things:
- I'm a web developer, and kind of good at what I'm doing. While I don't know where to start when using Unity or UE or RPG Maker, if I think about it as an advanced website it kind of makes sense, and I can see what to do
- When learning something, you don't start with the most complex part first. You start with easy stuff, and increase complexity bit by bit. This is true for foreign languages, this is true for sports, this is true for cooking, it's probably true for game development too.

So I found a book that focused on web technologies and had a project based progression ([The Web Game Developer's Cookbook: Using JavaScript and HTML5 to Develop Games](https://www.amazon.com/dp/B00C0OBZIU)). First "real" project was an adventuring game: talk to people, go in different rooms, use items, etc

I decided to focus first on the "talk to people" part, and it soon became that game

## What this game is
It's a prototype/MVP of a dating game. You can:

- Choose which character you want to talk to
- Talk with that character about different topics
- Get a positive/negative reaction based on what you say and said before
- Get a date or not with a given character

## What I learned

You need a strong model before starting. A couple times during this project I had to backtrack because the engine was constructed in a way that didn't work with the game system, and I had to implement features awkwardly or find workarounds.

On the other, I also learned that it's difficult to have a strong model until you start building the actual game. I had made a rough model before hand of how I wanted to organize the whole thing, but I missed a lot of things that weren't apparent at first. For example, it took until half the game to realize I wanted characters to be able to say several lines of dialog consecutively. 

I think a way to go around that dilemma is either having experience in making that kind of game (or games in general), and/or making a prototype like this one *before* starting to make the actual game. As it is, making this game made me more knowledgeable about making this game, if that makes sense. If I had to do it again from scratch, I would probably be able to make a better implementation based on what I learned.

I also learned a lot about Object Oriented Programming (OOP). It is not something I use in my daily work, and I actually didn't use it in this project (see below), but the more I advanced, the more I realized how OOP would have made things easier every time I was stuck by an issue.

This probably relates to the first issue I mentioned: OOP is great, but I feel like it is more difficult to set it up before you *really* know how your game is going to be structured. I'll definitely try it for my next project though.

Also there is a much stronger connection between all parts of the projects than I expected. Code was very dependent on the assets, and vice versa.

And finally, it is way easier to start a project than to finish it. I really liked working on this, but there were parts of it that really felt like work, and where I just wanted to start doing something else. I more or less expected it, but it was good to experience it directly.

## What I wished I had done differently

I wish I had found a way for "choosing a character" and "choosing an answer" to work more similarly. As it is, some code is repeated for both, and it's handled a bit awkwardly in some cases.

I wish I had organized the code differently. I probably should have OOP'd a lot more things, for example adding the attraction functions to a character object, and each character being a new instance of that object, which would have increased modularity. Also "character choice" and "answer choice" being instances of a "player choice" object would probably have made the whole thing easier

I wish I had found a better way to do the avatar tiling. As it is, it feels like a good idea poorly implemented.

## Disclaimer and apologies
The assets used are not my assets; the characters come from the game [Danganronpa 2](https://store.steampowered.com/app/413420/Danganronpa_2_Goodbye_Despair/). I haven't played the game, sorry if I misrepresented a character you like. The backgrounds come from [/r/ImaginaryCityscapes](https://www.reddit.com/r/ImaginaryCityscapes/).
There is no sex sorry
The humor is pretty bad
The writing is pretty bad too
It was a learning project, so it might not be that fun
The game is not very long
