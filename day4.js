/*let number=[1,2,"three",true];
let names=new Array("join","james");
console.log(number[2]);
console.log(names.length);
let result=number.filter(result=>number[1]);
console.log(result);
let number=[1,2,3,4,5];
//splice
number.splice(1,3,"hai");
//slice
let r=number.slice(0,1,20);
console.log(number)
let details={
    //insted obj
    name:"js",
    totalmark:"90",
    //nested obj
    subject:{
        dbms:"98",
        java:"99",
    },
    avg:function(){
        let sum=this.subject.dbms+this.subject.java;
        return sum;
    }
}
console.log(details.totalmark);
console.log(details["name"]);
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.avg());*/
//destrcturing
/*const person={
    name:"sri",
    age:18,
    city:"Coimbatore"
};
const{name,age,city}=person;
console.log(name);
console.log(age);
console.log(city);*/
const details=["sri",18,"bsc.ct"];
const[name,age,department]=details;
console.log(name+" "+age+" "+department);