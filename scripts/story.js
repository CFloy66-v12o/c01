var firstName = prompt('What is your first name?');
if (firstName == 'claire6864') {
  alert('Play the game you sexy thaaaang! I love you!');
} else {
  alert('You\'re not my wife but, I shall allow you in anyways.');
}

var verb = prompt('Let\'s write a mad lib, shall we? Enter a verb, (ends in "ing").');
var noun = prompt('Great, now enter a noun.');
var adjective = prompt('one more, enter an adjective.');
var adjective2 = prompt('one more adjective Yo, Thanks');



var message = ' One day, I was ' + verb + ' in the woods ';
message +=  ' when I came upon a ' + noun + '.';
message += ' Frightened, I turned and ran straight into a(n) ' + adjective + ' ' + noun + '.';
message += ' the smell of ' + adjective2 + ' was in the air';
alert('We\'ve made the story\! Now, Here it is.');
alert('But, before i forget..., have a great day! ');

alert('if you\'d like to learn programming, click on the treehouse link');

document.write("<p style='font-size:2.5em'>" + message + "</p>");
