var firstName = prompt('What is your first name?');
var today = new Date();
var hourNow = today.getHours();
var greeting;
var learnProgramming;

if (hourNow <= 12) {
  greeting = 'Good Morning! ' + firstName.toUpperCase();
} else if (hourNow >=12  <19) {
  greeting = 'Good Afternoon! ' + firstName.toUpperCase();
}else if (hourNow >= 19) {
  greeting = 'Ahhh, after 7pm I see, Time to Relax! ' + firstName.toUpperCase();
}else {
  greeting = 'Welcome ' + firstName.toUpperCase();
}



if (firstName === 'claire6864') {
  alert('Hello my love! Have a great day!');
} else {
  alert('well, You\'re not my wife but, I\'ll allow you in anyways, cause i like you ' + firstName + '.');
}
document.write("<p style='font-size: 2.5em'>" + greeting + "</p>");


var learnProgramming = prompt('before we start the mad lib, answer a quick question. Have you any interest in learning how to write code?');
if (learnProgramming === 'Yes' || 'yes') {
  alert('click on the treehouse link in your browser!');
} else if (learnProgramming === 'no') {
    alert('Enjoy your day');
} else {
    alert('Enjoy your day');
}


var verb = prompt('Let\'s write a mad lib, shall we? Enter a verb, (ends in "ing").');
var noun = prompt('Great, now enter a noun.');
var adjective = prompt('enter an adjective.');
var adjective2 = prompt('one more adjective, Thanks');
alert('We\'ve made the story\! Now, Here it is.');
alert('But, before i forget..., have a great day! ');
alert('if you\'d like to learn programming, click on the treehouse link');

var message = ' One day, I was ' + verb + ' in the woods ';
message +=  ' when I came upon a(n) ' + noun + '.';
message += ' Frightened, I turned and ran straight into a(n) ' + adjective + ' ' + noun + '.';
message += ' the smell of ' + adjective2 + ' was in the air';


document.write("<p style='font-size:2.5em'>" + message + "</p>");
document.write("<p style='font-size: 2.5em'>Thanks for visiting .... " + firstName.toUpperCase() + ". " + " Don't forget to check out treehouse before you go. </p>");
console.log(learnProgramming);
console.log(firstName);
