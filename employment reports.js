let employees=[];
//add emp
function addEmp(id,name,salary=true)
{
    employees.push({id,name,salary});
    console.log("Employee added",employees);
}
addEmp(1,"Archana",10000)
addEmp(2,"Boopitha",20000)
addEmp(3,"Thilakshitha",30000)
//update emp
function updateEmp(id,newDetail){
    const emp = employees.find(e=>e.id===id)
    if(emp){
        Object.assign(emp,newDetail);
        console.log("updated",employees)
    }
    else{
        console.log("Employee not found!")
    }
}
updateEmp(3,{name:"Sri"});
//delete emp
function removeEmp(id){
    const index=employees.findIndex(e=>e.id==id);
    if(index !== -1){
        employees.splice(index,id);
        console.log("employee removed",employees);
    }
    else{
        console.log("Employee not found!");
    }
}
removeEmp(1)
//calculate total salary
function totalSalary(){
    const total=employees.reduce((sum,emp)=>sum+emp.salary,0);
    console.log("Total salary is:",total);
}
totalSalary()
// search emp
//report emp