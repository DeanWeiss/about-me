'use strict';

let siteVisitor = prompt('Hey! What is your name?');

alert (`Welcome ${siteVisitor}, let's play a guessing game. Please answer yes or no.`);

let questionOne = prompt ('Do I have any children?').toLowerCase();

if(questionOne === 'no' || questionOne === 'n'){
    alert('You are correct.');
} else if(questionOne === 'yes' || questionOne === 'y'){
    alert('Sorry, that was a wrong guess');
} else{
Alert('Please answer with a valid response!');
}

let questionTwo = prompt ('Am I in the military?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y'){
    alert('You are correct.');
} else if(questionTwo === 'no' || questionTwo === 'n'){
    alert('Sorry, that was a wrong guess');
} else{
Alert('Please answer with a valid response!');
}

let questionThree = prompt ('Is my favorite football team is the Seattle Seahawks?').toLowerCase();

if(questionThree === 'no' || questionThree === 'n'){
    alert('You are correct.');
} else if(questionThree === 'yes' || questionThree === 'y'){
    alert('Sorry, that was a wrong guess');
} else{
Alert('Please answer with a valid response!');
}

let questionFour = prompt ('Do I have a dog?').toLowerCase();

if(questionFour === 'yes' || questionFour === 'y'){
    alert('You are correct.');
} else if(questionFour === 'no' || questionFour === 'n'){
    alert('Sorry, that was a wrong guess');
} else{
Alert('Please answer with a valid response!');
}

let questionFive = prompt ('Have I ever broken a bone in my body?').toLowerCase();

if(questionFive === 'no' || questionFive === 'n'){
    alert('You are correct.');
} else if(questionFive === 'yes' || questionFive === 'y'){
    alert('Sorry, that was a wrong guess');
} else{
Alert('Please answer with a valid response!');
}

alert (`${siteVisitor}, thank you for visiting my website, I hope to see you again`);