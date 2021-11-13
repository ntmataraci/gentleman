const words=[
"I am really impressed with how well you listen to everything that everyone says It is obvious that you listen to everyone before you make a decision on what to do next",
"You really have the ability to light up a room as soon as you walk in It is obvious that everyone loves spending time around you, including me",
"I’m really impressed with how well you play your musical instrument I never realized just how good you were at music I could listen to you play for hours on end ",
"You’re a very intelligent person who thinks carefully about how you complete assignments in school and at work The sky is the limit for your future ",
"You have a sense of confidence that is very refreshing I never have to worry about your self-esteem, as you believe in yourself just as much as anyone I have ever seen",
"I always love how you are willing to help someone out No matter what problems someone might have, you are always willing to put their needs ahead of you around, which sets a great example",
"You are a great role model for everyone else around you There are lots of people who look up to you, and it is obvious that you take that very seriously ",
"I am really impressed with how well you keep yourself in shape Even though you are very busy, you always seem to make time to exercise, which is going to pay dividends down the road ",
"I really respect just how much you stand up for what you believe in It seems like no matter what happens, you are never willing to sacrifice your beliefs or something else ",
"You are a natural-born leader It is obvious that people follow you wherever you go Your ability to inspire others to follow you is infectious ",
"Your mind works in such a unique way You always see things from a different perspective, which is a great way to teach others Never lose that about yourself ",
"You always seem to know just what to say! No matter how bad I am feeling, you always know just what to say to raise my spirits That quality is irreplaceable ",
"I never realized just how great your sense of humor was! You always know just what to say to make someone else laugh That is a great way to maintain relationships throughout your life ",
"I really admire just how well you are able to stay in touch with the people in your life No matter how busy you get, you always make time for those important to you ",
"I consider myself lucky to have gotten to know you You have had a major impact on my life, and I truly appreciate it ",
"You always let the other person know just how much they matter to you No matter how busy you are, you always let them know that your relationship with that matters to you",
"I’m a better person for getting to know you I cannot measure the impact you’ve had in my life, but I know it is something I will carry with me forever ",
"I always feel like I am happy when I am around you I really appreciate how you make time for me",
"I love how I can always depend on you If you say you are going to do something, you always find a way to get it done ",
"You are one of the most reliable people I know I am always impressed with how you come through every time ",
"The world is a better place with you in it Even though there are difficult times, you always seem to find the bright spot",
"I love how you never seem to make the same mistake twice If you do something wrong, you learn from that, and instantly become a better person Everyone else can learn from you ",
"I am really impressed that you are always able to find the silver lining in a difficult situation ",
"I love your ability to make other people feel important ",
"You are one of the bravest people I know You are not afraid to take chances, and you always go for it",
"I really admire your dedication to what is right",
"I love how you are comfortable with the type of person you are You do not care about what anyone else thinks about you ",
"The world needs more people like you, and you mean a lot to me",
"You really understand what it means to be a good friend ",
"I’m so glad we’ve met because you have made me a better person ",
"I’m really impressed with your time management skills You always find a way to get things done ",
"You have a gift for putting a smile on someone’s face ",
"You always have something nice to say about everyone ",
"You have a truly beautiful soul Your inner beauty always finds a way to shine through, no matter how dire things may look ",
"I really admire your dedication to the environment It is obvious that you care about the future of the planet ",
"I always love how you make a positive impact on children You always seem to make them smile ",
"I always admire how you are able to admit when you are wrong It is never easy, but it is obvious that you always learn from it "]

let progStart=false
Const name=document.querySelector("name").value
Const timer=document.querySelector("timer").value

document.querySelector("start").addEventlistener("click",()=>{
progStart=!progStart
(progStart)?document.querySelector("start").value="enough":document.querySelector("start").value="talk"
(progStart)?startProg:stopProg
}

Function startProg(){
setInterval(() => {
    alert(words[Math.floor(Math.random()*(words.length)-1)])
}, 20000);}

Function stopProg(){
clearInterval(startProg)}
