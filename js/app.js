'use strict';

let siteVisitor = prompt('Hey! What is your name?');

alert (`Welcome ${siteVisitor}, let's play a guessing game. Please answer yes or no.`);

let score = 0;

let questionOne = prompt ('Do I have any children?').toLowerCase();

if(questionOne === 'no' || questionOne === 'n'){
    //console.log(`You are correct`)
    alert('You are correct.');
    score++;
    console.log(score);
} else if(questionOne === 'yes' || questionOne === 'y'){
    //console.log(`Sorry, that was a wrong guess.`)
    alert('Sorry, that was a wrong guess');
} else{
    //console.log(`Please answer with a valid response!`)
    Alert('Please answer with a valid response!');
}

let questionTwo = prompt ('Am I in the military?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y'){
    //console.log(`You are correct`)
    alert('You are correct.');
    score++;
    console.log(score);
} else if(questionTwo === 'no' || questionTwo === 'n'){
    //console.log(`Sorry, that was a wrong guess.`)
    alert('Sorry, that was a wrong guess.');
} else{
    //console.log(`Please answer with a valid response!`)
    Alert('Please answer with a valid response!');
}

let questionThree = prompt ('Is my favorite football team is the Seattle Seahawks?').toLowerCase();

if(questionThree === 'no' || questionThree === 'n'){
    //console.log(`You are correct`)
    alert('You are correct.');
    score++;
    console.log(score);
} else if(questionThree === 'yes' || questionThree === 'y'){
    //console.log(`Sorry, that was a wrong guess.`)
    alert('Sorry, that was a wrong guess');
} else{
    //console.log(`Please answer with a valid response!`)
    Alert('Please answer with a valid response!');
}

let questionFour = prompt ('Do I have a dog?').toLowerCase();

if(questionFour === 'yes' || questionFour === 'y'){
    //console.log(`You are correct`)
    alert('You are correct.');
    score++;
    console.log(score);
} else if(questionFour === 'no' || questionFour === 'n'){
    //console.log(`Sorry, that was a wrong guess.`)
    alert('Sorry, that was a wrong guess');
} else{
    //console.log(`Please answer with a valid response!`)
    Alert('Please answer with a valid response!');
}

let questionFive = prompt ('Have I ever broken a bone in my body?').toLowerCase();

if(questionFive === 'no' || questionFive === 'n'){
    //console.log(`You are correct`)
    alert('You are correct.');
    score++;
    console.log(score);
} else if(questionFive === 'yes' || questionFive === 'y'){
    //console.log(`Sorry, that was a wrong guess.`)
    alert('Sorry, that was a wrong guess');
} else{ 
    //console.log(`Please answer with a valid response!`)
    Alert('Please answer with a valid response!');
}
let questionSix
let myAge = 36
// console.log(typeof questionSix)
for(let i= 0; i < 4; i++){
    questionSix = parseInt(prompt('How old am I?'));
    if(questionSix === myAge){ 
        alert(`You are correct.`)
        score++;
    console.log(score);
        break
    }else if(questionSix < myAge){
        alert(`Wrong Answer, go higher.`)
    }else if(questionSix > myAge){
        alert(`Wrong Answer, go lower.`)
    }    
}    
if (questionSix != myAge){
    alert(`You are bad at this, I am 36.`)
}
// TA David Hecker assisted me with the code from line 71 to 86

for(let i= 0; i < 6; i++){
    let questionSeven = prompt(`In Star Wars: Episode 1 - The Phanton Menace, Give me the first name of one of the two Jedi sent to negotiate with the Trade Federation at the blockade of Naboo.`).toLowerCase();
    let jedi = [`obi-wan`, `qui-gon`];
    for(let j= 0; j < jedi.length; j++){
        if(questionSeven === jedi[j]){
            alert(`Correct. The Force is strong with you.`)
            score++;
            console.log(score);
            break
            }
    }
    break
}

alert(`Your options were Obi-Wan or Qui-Gon.`)
alert(`Congratulations ${siteVisitor}, your score is ${score} out of 7.`); 
alert(`${siteVisitor}, thank you for visiting my website, I hope to see you again`);