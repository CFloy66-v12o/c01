var firstName = prompt('What is your first name?');
var today = new Date();
var hourNow = today.getHours();
var greeting;
var learnProgramming;

if (hourNow === 7 || 8 || 9 || 10 || 11 ) {
  greeting = 'good morning! '.toUpperCase() + firstName.toUpperCase();
} else if (hourNow === 12 || 13 || 14 || 15 ) {
  greeting = 'good afternon! '.toUpperCase() + firstName.toUpperCase();
} else if (hourNow === 16 || 17 || 18 ) {
  greeting = 'good, late afternoon! '.toUpperCase() + firstName.toUpperCase();
}else if (hourNow >= 19) {
  greeting = 'Ahhh, after 7pm I see, Time to Relax! '.toUpperCase() + firstName.toUpperCase();
}else {
  greeting = 'Welcome '.ToUpperCase() + firstName.toUpperCase();
}



if (firstName === 'claire6864') {
  alert('Hello my love! Have a great day!'.toUppercase());
} else {
  alert('well, You\'re not my wife but, I\'ll allow you in anyways, cause i like you ' + firstName + '.');
}
document.write("<p style='font-size: 2.5em'>" + greeting + "</p>");





alert('Let\'s write a mad lib, shall we? Title: "A dear John letter from a dude\'s hair."');
alert('it\'s a bit of a lengthy Mad Lib. Show some intestinal fortitude!');
var fatGuy = prompt ('Name of fatguy you know?');
var obnoxiousFans = prompt('Enter a sports team with really obnoxious fans.');
var cheeseSteaks = prompt('Enter a good place to get cheese steaks.');
var stripClub = prompt('Silly name for a strip club.');
var hairProduct = prompt('Enter a favorite hair product.');
var farmAnimal = prompt('Enter the name of a farm animal.');
var italianGuy = prompt('Annoying italian barber you may know.');
var skinMag = prompt('Favorite skin mag?');
var barberShop = prompt('Name of a real crappy barber shop.');
var sluttyX = prompt('Name of Ex (or current) who slept with your best friend.');
var bodyPart = prompt('Name a body part.');
var cartoonChar = prompt('The name of a cartoon character.');
var womensCableNet = prompt('Name of a women\'s cable network.' );
var stinkySnack = prompt('Name a smelly snack food.');
var deadBaldActor = prompt('Name a dead, bald actor.');
var stripper = prompt('Stripper named after a spice.');
alert('We\'ve made the story! Now, Here it is.');
alert('But, before i forget..., have a great day! ');


var message = 'Dear ' + fatGuy + ', ';
message +=  ' I\'m leaving you. You\'ve worn one too many ' + obnoxiousFans + ' hats.';
message += ' Everytime you leave the house, you go to (the) ' + cheeseSteaks + ' or ' + stripClub + ' you\'re covering me up.';
message += ' it\'s like you\'re embarassed to be seen with me ' + '.' + ' When you\'re not covering  me up with a hat,';
message += ' you just smother me with ' + hairProduct + ' that smells like ' + farmAnimal + '.';
message += ' You used to care about me. You\'d go to ' + italianGuy + '\'s barber shop. He had all those issues of ' + skinMag + ' in the waiting area.';
message += 'But then, you started going to ' + barberShop + '. ' + ' It\'s like you stopped caring.';
message += ' I suppose when ' + sluttyX + ' broke up with you, it was hard. She would run her ' + bodyPart + ' through me. That was fabulous!';
message += ' She even convinced you to stop shaving ' + cartoonChar + ' into the side of your head. Once she was gone, you were never the same.';
message += ' You sat around the house watching ' + womensCableNet + ',' + ' eating ' + stinkySnack + ',' + ' while covering me up.';

document.write("<p style='font-size:2.5em'>" + message + "</p>");
document.write("<p style='font-size: 2.5em'>Thanks for visiting .... " + firstName.toUpperCase() + ". " + " Don't forget to check out treehouse before you go. </p>");
console.log(learnProgramming);
console.log(firstName);
