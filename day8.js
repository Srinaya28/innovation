let currenttime = new Date(); 
console.log(currenttime);
let local = currenttime.toString();
console.log(local);
let hours = currenttime.getHours();
console.log(hours);
let minutes = currenttime.getMinutes(); 
console.log(minutes);
let day = currenttime.getDay(); 

class Exam {
    constructor(personname) { 
        this.personname = personname;
        console.log(this.personname); 
    }
}

let result = new Exam("Sri");


class Bank {
    constructor(initialamount = 0) {
        this._balance = initialamount;
    }

    get balance() {
        return this._balance;
    }

    set balance(amountdeposit) {
        if (amountdeposit > 0) {
            this._balance += amountdeposit; 
            console.log(this._balance);     
        }
    }
}

let add = new Bank(10);
console.log(add.balance); 
add.balance = 20;         
console.log(add.balance); 