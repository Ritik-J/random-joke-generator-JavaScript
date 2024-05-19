
let jokes = [ `ham sandwich 
A ham sandwich walks into a bar and orders a beer, bartender says sorry, we dont serve food here.” For even more laughs, check out the unniest jokes of all time that youll want to share with everyone you know.`,

`clydesdale 
Why did the Clydesdale give the pony a glass of water? Because he was a little horse. Its okay, we all laugh at bad jokes—theyre actually ilarious`,

`fish without eyes 
What do you call a fish without eyes? Fsh. These are the 20 grammar corny jokes every word nerd will appreciat`,

`alligator detective 
"What do you call an alligator detective? An investi-gator. If you thought this was funny, youll love these other hilarious what do you call ok`,

`scarecrow award
Why did the scarecrow win an award? Because he was outstanding in his field.`,

`talking muffin
There are two muffins baking in the oven. One muffin says to the other, “Phew, is it getting hot in here or is it just me?” The other muffin ays, AAAAHHH!! A TALKING MUFFIN!” Dont forget to read these funny tweets for more laug`,

`soccer match 
What lights up a soccer stadium? A soccer match. Here are some short jokes for kids that anyone can remember—and theyre pretty fun`,

`broken pencil
"Why shouldnt you write with a broken pencil? Because its pointless. Dont think thats the funniest joke ever? These are the one-liners we now youll love`,

`bird flu swine flu 
Whats the difference between the bird flu and the swine flu? One requires tweetment and the other an oinkment. `,

`If athletes get athletes foot, what do elves get? Mistle-toes. Thought that was good? These plant puns will knock your stalks of`,
`foul play `,

`After a crime, a detective noted that he thought it was foul play. The other detective said, “You mean, he was playing with birds?”`,

`brown and sticky
Whats brown and sticky? A stick. Need more laughs? These Laffy Taffy jokes will sweeten your da`,

`policeman
What did the policeman say to his bellybutton? Youre under a ves`,

`break a leg 
Why do people say “break a leg” when you go on stage? Because every play has a cast.`,

`karate pig 
What do you call a pig that does karate? A pork chop. Here are some pig puns that are sure to make you snor`,

`ghost hearing
What kind of ghost has the best hearing? The eeries `,

`cemetery gates
Why are there gates around cemeteries? Because people are dying to get in.`,

`seagulls 
Why do seagulls fly over the sea? Because if they flew over a bay, they would be bagel`,

`computers overheat 
When do computers overheat? When they need to ven`,

`music planets 
What kind of music do planets like? Neptunes. Check out these biology jokes that really cell themselves.`,

`chicken broth 
Where can you buy chicken broth in bulk? The stock market.`,

`sticky hair 
Why do bees have sticky hair? Because they use honeycomb`,

`rabbits travel
How do rabbits travel? By hareplanes. Find the funniest joke for your Christmas party with these holiday jokes.`,

`vampire sick 
how do you tell if a vampire is sick? By how much he is coffi cow `,

`two legs 
What do you call a cow with two legs? Lean beef! If your funny bone still needs tickling, here are the top jokes from comedy legend`,

`fake spaghetti 
What do you call fake spaghetti? An im-pasta.`,

`yoga landlord 
What did the yoga instructor say when her landlord tried to evict her? Namast`,

`charging bull 
How do you stop a bull from charging? Cancel its credit car`,

`mushroom party 
Why did the mushroom go to the party? Because he was a fungi. Memorize these short corny jokes to be the hit at your next party.`,

`farmer award 
Why did the farmer win an award? He was outstanding in his fiel`,

`birds stick together 
What do you call birds that stick together? Vel-crows.`,

`sea monsters eat 
What do sea monsters eat? Fish and ships.`,

`nose 12 inches 
Why cant your nose be 12 inches long? Because then it would be a fo`,

`ocean shore 
What did the ocean say to the shore? Nothing…It just waved. These clever jokes will make you sound smar`,

`tomato race 
What did the tomato say to the other tomato during a race? Ketchup.`,

`golfer pants 
Why did the golfer bring two pairs of pants? In case he got a hole in on`,

`factory good products 
What do you call a factory that sells good products? A satisfactor`,

`barber race 
How did the barber win the race? He knew a shortcut.`,

`cows like to read 
What do cows most like to read? Cattle-logs. Dont forget to check out our other hilarious cow joke`,

`chicken coop 
Why does a chicken coop only have two doors? If it had four doors it would be called a chicken seda`,

`sleeping dinosaur 
What do you call a sleeping dinosaur? A dino-snore. If you thought that was good, check out these other hilarious dinosaur jokes.`,

`pile of cats 
What do you call a pile of cats? A meow-tain. These cat memes will make you laugh every tim`,

`four wheels 
What has four wheels and flies? A garbage truc`,

`poker jungle
Why dont they play poker in the jungle? Too many cheetahs.`,

`corduroy pillow 
Have you heard about the corduroy pillow? No? Really? Its making headlines! These hilarious dog puns will give you paw`,

`drop a piano 
What do you get when you drop a piano down a mine shaft? A flat mino`,

`duck lipstick 
How does a duck buy lipstick? She just puts it on her bill. Check out more duck jokes thatll quack you up.`,

`frogs happy
Why are frogs are so happy? They eat whatever bugs them`,

`one hat 
What did one hat say to the other? You stay here. Ill go on ahea`,

`sick boat 
What do you do with a sick boat? Take it to the doc already. Check out the funniest jokes about all 50 states.`, ]

// Function to display a random joke
function displayJoke() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke').textContent = joke;
}

// Display a random joke when the page loads
window.onload = displayJoke;
