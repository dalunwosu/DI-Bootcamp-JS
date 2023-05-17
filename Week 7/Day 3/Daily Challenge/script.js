const sentence = ("The movie is not that bad, I like it");
let wordNot = sentence.indexOf("not");
console.log(wordNot);
let wordBad = sentence.indexOf("bad");
console.log(wordBad);
if(wordBad>wordNot){
    
 let good = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3)
console.log(good);
}
else if (wordNot>wordBad){
    console.log(sentence);
}