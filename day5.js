/*let number=9089786858
let value=/^[1-9]\{9}d/;
if(value.test(number.toString())){
    console.log("correct")
}
else{
    console.log("wrong pattern")
}
let enter=9089786858
let value=/^[1-9]\d{10}$/;
if(value.test(enter.toString())){
    console.log("correct")
}
else{
    console.log("check your valid num")
}
let text="Hai help";
let match=/\bh\w+\b/gi;
console.log(match?text:0)
console.log(text.length);*/
const text="hello how are you";
const words=text.match(/\b\w+\b/gi);
console.log(words.length);
