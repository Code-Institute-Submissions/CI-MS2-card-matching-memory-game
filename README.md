# **"Remember That Cat?" Memory Game**


This project was built for the purposes of one of my first personal projects ("milestone projects") at Code Institute.

This was an interactive or dynamic front end development project: the requirements were:

>Write custom JavaScript, HTML and CSS code to create a front-end web application consisting of one or more HTML pages with significant interactive functionality.

There were a few project ideas suggested, and I chose to try to do a card-matching memory game.

---

## User Stories, Strategy, Scope

The people I had throughout the project's development to bounce ideas off of and get feddback from, are of a likeminded mindset as I, in that as
site owner I would like the same of it as I would as an external user, and that is:

<ul>
<li>mainly to have fun and enjoyment playing the game</li>
<li>that the game is overall relaxing</li>
    <ul>
    <li>bright, soothing, relaxing colors and imagery</li>
    <li>not fast paced - something to play at my own pace</li>
    <li>minimalistic and simple to use</li>
    <li>something you might play in the morning over a cup of coffee or tea, or in the evening, relaxing after a long day at work</li>
    </ul>

</ul>

I decided to a cat-themed memory game - hence the name: Remember That Cat?

---
## Structure

The site can be seen as consisting of two major parts - the landing page and the actual game.
Whereas the game can be played on two different boards/grids, defined by the number of cards/tiled
each of the boards has. The landing page is comprised of a short introductory/explanatory text, and a board size selection option.

<ol>
<li>Landing page</li>
    <ol>
    <li>introductory text</li>
    <li>board size selection</li>
    </ol>
<li>Memory game</li>
    <ol>
    <li>3x4 grid</li>
    <li>3x6 grid</li>
    </ol>
</ol>

A rudimentary/crude [wireframe can be seen here](wireframes/MS2-Wireframe.png).

---
## Layout

### ***Colour scheme and typography***

#### ***Fonts***
Two fonts are used:

<ol>
<li>Rock Salt</li>
    <ul>
    <li>for the heading</li>
    </ul>
<li>Gloria Hallelujah</li>
    <ul>
    <li>for the rest of the text</li>
    </ul>
</ol>

<ul>
<li>"cursive" is used a general backup font</li>
</ul>

Those fonts are selected because:

<ul>
<li>a) they fit in with overall theme and main idea (the fonts seem "light" and "playful")</li>
<li>b) they work well together</li>
<li>c) their balance between style and readability</li>
    <ul>
    <li>they read well on the chosen background</li>
    <li>they read well altogether (some more cursive oriented or handwritting-mimicing fonts might read less well)</li>
    </ul>
</ul>

#### ***Colours and Imagery***

Attempt was made to make the clours and imagery, and colours on the imagery, work well together,
and in keeping with the overall theme.

Colours:

<ul>
<li>#d68717 - a.k.a. "Garfield" - for the tile backs on the 3x6 grid (a subtle "cat-based" colour - a nod to one of the most famous cat characters created)</li>
<li>#2d3f81 for the tile backs in the 3x4 grid - this was selected in search of a "Chagall blue"</li>
<li>#f0ead6 - "eggshell" for the tile fronts' background</li>
<li>"plain" or "standard" blue when hovering over the landing page links to grids</li>
<li>plain black for the text</li>
</ul>

Imagery:

<ul><li>Background images:</li></ul>
Landing page's background image is abstract, of bright colours, that makes it look colourful, while
not being to hard on the eyes, and keeping the text readable.

3x4 grid's background is dominated by a blue, pastel-like colour, working well together with the tile backs' blue, with
drawn fish, keeping the whole experience cat-themed (cat are seen that they like fish:
eating fish, looking at fish, trying to catch fish, playing with fish, etc.).

3x6 grid has a more colourful background, where the same principles still apply: it's bright and colourful, but no hard on the eyes;
works well with the tile backs' colour; and is cat-themed, as it's displaying balls of yarn (something cats like to play with).

Background images work well on smaller screen sizes also.

<ul><li>Silhouettes:</li></ul>
Each of the two grids has it's on cat silhouette on the backs of tiles.

Stretching cat on the 3x4 grid (with conotations of a "sleepy", just-waking-up cat - 
starting off with a smaller grid - blue can also work as a "sleepy" colour).

And a "reaching" cat for the 3x6 grid (a now "warmed up", playful cat, reaching out both for you to flip the tile, 
and to play with the yarn in the background).

<ul><li>Tile images:</li></ul>
Are images of "actual cats I know".

Each grid has a completely different set of images, so that all the images are different (and hopefully make you want to turn all the tiles, to see all the images).

<ul><li>Icons:</li></ul>
Paw icons are used around the links to grids on the landing page.

The cursor all turns into a paw when you hover over those links - to give an effect of giving a "cat high five" (a "cat five") to start the game.

---
## Features

### ***Landing page text***
Tells you about the game in a minimalistic fashion:

<ul>
<li>that it's a <em>card-matching</em> memory game (as opposed to other memory games out there)</li>
<li>that you match all the pairs to finish a game</li>
<li><em>a</em> game implying that you could play more</li>
<li>and that you select a board size to begin</li>
</ul>

### ***Paw cursor icon***
When you hover over the links that lead you to to your select board/gris size, the cursor turn into a paw icon, as mentione above.

### ***The game***

There are two different board sizes: 3x4 and 3x6.

They could be taken to represent diffent difficulty setting - "easier" and "harder" - although I didn't wan't to call them that - they just tell you exaclty how
many tiles to expect.

The idea is that this is a game for anybody - so small child might wan't to play, and find the 3x6 grid a bit too much to begin with, and would like to play the 3x4 grid.

Game functions the same no matter which grid is chosen.

<ul>
<li>The tiles are shuffled for the player before the game starts.</li>
<li>Any tile can be turned as the first tile.</li>
<li>There's a flip animation when turning the tile.</li>
<li>The tile cannot be double-clicked while it is turned (i.e. double-clicking it does nothing).</li>
<li>Then a second tile is turned:</li>
    <ul>
    <li>if a match is made, both tiles stay turned over</li>
    <li>if a match is not made, there's an animation of both tiles being flipped back.</li>
    </ul>
<li>There's a pause (timeout) after flipping the second tile, and the tiles flipping back if a match is not made, that is deemed both long enough, and not too long.</li>
<li>While the second tile is flipped, a third one cannot be turned (clicking it does nothing).
A new tile can be turned only when the preceding two have flipped back (if a match hasn't been made)</li>
<li>Once you make all the matches, you get a pop-up message congratulating you, you press "Ok", and the board is reshuffled.</li>
</ul>

### ***Features left to implement***

- sounds to accompany the game
- larger pool of backgrounds
    - so that a different background could be loaded with a new game
- "chessboard style" ruler for smaller screens
    - the idea is to have two "rulers" - a vertical and a horizontal one - when playing the game on smaller screens
    - for larger grids, the front of the tile images wouldn't then have to be reduced to the size of indiscernibility, but could be rather kept at a tolerable size,
with a horizontal ruler - marked from "A" to whichever letter, depending on the number of columns, and a vertical ruler - marked from "1" to
whichever number, depending on the number of rows
    - so a player would for example now he's flipping tiles "B2" and "D5" - i.e. would always know where he is (at which tile), 
even when scrolling in both directions
- radio buttons and a large clickable paw icon on the Landing Page, for selecting a grid
    - user would mark the button next to a desired grid, 
and then click on the large paw to "enter" - seemingly giving a "cat five" to start
- graph ("wireframe") that visuali explain the memory game's JS logic to be added to the project's documentation
- landscape orientation lock for smaller screens - the game does not look well when it's loaded in portrait orientation mode on very small screens, and is practically unplayable in such a case for a 3x6 grid, because
all the tiles diplay horizontally in the viewport (they scroll vertically)
    - so the idea is to make the game load only in landscape mode for those screen sizes, which would make it still playable on those screens
- adding a home (back to) button on both of grids
    - the greatest - and quite a big flaw of the site's design is that it doesn't have a back to home button or either of the grids, that would lead the user 
to the front page 
    - rather, the users would have to use the back button on their browser at the moment 
    - the home button is not yet implemented as the choice to use a flexbox in designing the grids is causing some display/layout issue in adding such a button
    - this feature would be a priority to add

---
## Technologies and Tools Used

* HTML (HTML5)

* CSS (CSS3)

* JavaScript

* Repl.it

* Font Awesome

* Google Fonts

* GitHub

* GitPod

* Chrome DevTools

* HTML Validator

* CSS Validator

* CodePen

* Stack Overlow

* https://jshint.com/

* https://css-tricks.com/

* https://pixabay.com/

* https://wallpaperaccess.com/

* https://flexbox.help/

* https://www.w3schools.com/

* https://www.colourlovers.com/

* https://www.color-hex.com/

* https://onlinepngtools.com/

* https://encycolorpedia.com/

* https://css-tricks.com/centering-list-items-horizontally-slightly-trickier-than-you-might-think/

* Marina Ferreira's "Memory Card Game - JavaScript Tutorial" at freeCodeCamp.org YouTube channel - https://www.youtube.com/watch?v=ZniVgo8U7ek

* Adam Khoury's "Memory Game Programming JavaScript Tutorial" - https://www.youtube.com/watch?v=c_ohDPWmsM0

---
## Testing

This project was manually tested as it was buing built.

Project was primarily built using Repl.it, before being "migrated" (retyped) to GitPod, and stored on GitHub.

Different features, ideas, and variants of the projects could be quickly tested out in different "repls", as the project overall 
wasn't too demanding for Repl.it's capacities.

W3C HTML and W3C CSS Validators were also use to asses the code, as well as JSHint.
Some minor error were shown in the html and css codes, and they were remedied (it was mainly to do with img file naming).
A tweak (comment) had to be added to JS code for to pass JSHint ES6 related warnings like this "ES6 (use 'esversion: 6')".
Also a ternary expression had to be replaced with a regular if-else to pass JSHint.

Chrome DevTools were relied upon heavily.

But nothing was relied on as heavily as Marina Ferreira's tutorial for freeCodeCamp (link below).

Marina Ferreira warns about two bugs, should a logic like from her tutorial be implemented:

- if two tiles are turned, and no match is made, and then more tiles are turned before those two tiles have flipped,
that messes up the game
- if you double-click a tile, it's stays turned

Hence the lockBoard variable. I've tested for those two bugs, and they do appear, and the lockBoard
does seem to solve the issues.

Also, even though w3schools says (https://www.w3schools.com/tags/att_data-.asp)
about the "data-*" attribute:

> 1. The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-"
> 2. The attribute value can be any string

using hyphens doesn't seem to work either. Underscores do work.

For example:

- data-pairingNumber - doesn't work (nor should camel case, because of caps)
- data-pairing-number - doesn't work
- data-pairing_number - works
- data-pairingnumber - works

At least all of this did occur in Repl.it.

Also, if a timeout hadn't been added before a pop-up message appears to inform (congratulate) the player
he or she has cleared the board, the message would appear before we could see the very last tile turn (the message appeared
immediately after the tile was clicked, and before we could see it turn), and also a board was apparently shuffled for the player
before "Ok" was pressed.

Adding a timeout seemed to rectify all of this.

---
## Deployment

### ***Deployment to Github Pages***

- I signed into my account on GitHub's website, and selected "Repositories".

- I then selected "CI-MS2-card-matching-memory-game" from thr repositories list.

- From there I clicked on the "Settings", and the navigated down to the "GitHub Pages" section.

- From the "Source" section, I clicked on the drop-down menu and selected "Master Branch".

- And then I was provided with a link which represents my now deployed project.

The live link can be found here - https://antecedens.github.io/CI-MS2-card-matching-memory-game/

Note: it can take a minute or two for the page to be deployed, i.e. to load or open.

### ***Local Deployment***

 - To run locally, you can do one of the following two options:
    
    - Clone the repository using the `git clone https://antecedens.github.io/CI-MS2-card-matching-memory-game.git` command

    - Download the zip file, unzip and run in an IDE of your choosing

---
 ## Credits
 

 ### ***Content***

 Text was written by me.


 ### ***Media***

 - Background photos were taken from:
    - https://pixabay.com/ and
    - https://wallpaperaccess.com/

- Paw icon image used for the custom cursor is taken from:
    - hiclipart.com

- Cat silhouettes used are from:
    - https://www.netclipart.com/ and
    - https://dlpng.com/

- Cat photos used for the fronts of tiles were all taken by either me, or my girlfriend


### ***Acknowledgements***

There seems to be quite a few memory game tutorials available on the internet. I've mainly used two, that are already listed above under "Technologies and Tools Used":
Adam Khoury's - to a lesser extent, and Marina Ferreira's - to the greatest extent. 

Without Marina's tutorial I don't how would I've finished this project; maybe even 
how would I've started. Or how far would I've got, and how long it would take me to get there. The logical build of the actual memory game, the way it's
structured, is basically hers.

And I've always be grateful to Claire Lally, for being kind enough to send me a link to her readme.md file, when I was doing my very first project, to assist me in writting my readme - https://github.com/ClaireLally8/TravelDiary/blob/master/README.md
