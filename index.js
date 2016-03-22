// English to Pig Latin
var string = "Hello";

var firstletter = string.charAt(0);
string = string.substring(1);
string = string + "-" + firstletter + "ay";


//Pig Latin to English
var pigString = "ello-hay";
var pigCatcher = pigString.substr(pigString.length - 4);
var letterGetter = pigCatcher.slice(1,4);
letterGetter = letterGetter.slice(0,1);
var halfString = pigString.replace(pigCatcher, " ");
var englishString = letterGetter + halfString;

//Pig latin String to English
var pigPhrase = "ello-hay ow-hay are-ay ou-yay";
var pigArray = pigPhrase.split(' ');
var firstStringLetters=[];
for(var i = 0; i < pigArray.length; i++) {
  pigArray[i] = pigArray[i].replace('ay', '');
  pigArray[i] = pigArray[i].replace('-', '');
  if (pigArray[i].substr(pigArray[i].length -1).indexOf("a") > -1 || pigArray[i].substr(pigArray[i].length -1).indexOf("e") > -1 || pigArray[i].substr(pigArray[i].length -1).indexOf("i") > -1 || pigArray[i].substr(pigArray[i].length -1).indexOf("o") > -1 || pigArray[i].substr(pigArray[i].length -1).indexOf("u") > -1 ){
    1 === 1; // 1 === 1 or indexOf(x) < 9999 to ensure words can be as long as possible
  } else {
      firstStringLetters[i] = pigArray[i].slice(-1);
      pigArray[i] = pigArray[i].slice(0, -1);
    }
}
for (i = 0; firstStringLetters.length > i; i++){
  if(firstStringLetters[i] === undefined){
    firstStringLetters[i] = "";
  }
}
var englishArray = firstStringLetters.map(function (e, i){
  return [firstStringLetters[i], pigArray[i]];
});
for (i =0; englishArray.length > i; i++){
  englishArray[i] = englishArray[i].toString();
  englishArray[i] = englishArray[i].replace(',', '');
}
englishArray = englishArray.toString();
englishArray = englishArray.replace(/,/g, ' ');

console.log(englishArray);
