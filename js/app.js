'use strict';

let siteVisitor = prompt('Hey! What is your name?');

alert (`Welcome ${siteVisitor}, let's play a guessing game. Please answer yes or no.`);

let questionOne = prompt ('Do I have any children?').toLowerCase();

if(questionOne === 'no' || questionOne === 'n'){
    //console.log(`You are correct`)
    alert('You are correct.');
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
} else if(questionFive === 'yes' || questionFive === 'y'){
    //console.log(`Sorry, that was a wrong guess.`)
    alert('Sorry, that was a wrong guess');
} else{ 
    //console.log(`Please answer with a valid response!`)
    Alert('Please answer with a valid response!');
}

alert (`${siteVisitor}, thank you for visiting my website, I hope to see you again`);