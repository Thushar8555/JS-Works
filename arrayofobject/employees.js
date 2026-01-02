
var employes=[
    {id:1,name:"thushar",department:"it",salary:65000,gender:"male"},
    {id:2,name:"arun",department:"it",salary:10000,gender:"male"},
    {id:3,name:"amal",department:"it",salary:15000,gender:"male"},
    {id:4,name:"gowtham",department:"mech",salary:25000,gender:"male"},
    {id:5,name:"roshan",department:"account",salary:35000,gender:"female"},
    {id:6,name:"venki",department:"it",salary:45000,gender:"male"},
    {id:7,name:"prabii",department:"tester",salary:55000,gender:"male"},
    
]

// display all employee name

//var allemployee=employes.map(ep=>ep.name)
//console.log(allemployee);

// displat it employees
//var itemployees=employes.filter(ep=>ep.department=="it").map(ep=>ep.name)
//console.log(itemployees);

//var female=employes.filter(ep=>ep.gender=="female").map(ep=>ep.name)
//console.log(female);

//employes.sort((e1,e2)=>e1.salary-e2.salary)
//console.log(employes);

// maxsalary 
var max=employes.reduce((s1,s2)=>s1.salary>s2.salary?s1:s2).salary
console.log(max);
// minsalary
var min=employes.reduce((s1,s2)=>s1.salary<s2.salary?s1:s2).salary
console.log(min);


