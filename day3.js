/*function voting(age){
    if(age>=18){
        let iscloudy=true;
        var israining=true;
        console.log("Eligible");
        console.log(iscloudy);
    }
    console.log(israining);
    console.log(iscloudy);
}
voting(18)
function Say(){
    let name="Javascript"
    console.log("Hai,Global scope");
    console.log("Within"+a);
}
Say()
local scope (same as function or block scope depending on context)
 function*/ 

function text(){
    console.log("Message");
} 
function send(callback){
    console.log("Message sended");
    setInterval(callback,1000);
}
send(text);

let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count < 5){
        Interval();
    }
}
Interval();