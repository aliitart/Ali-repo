/*
Alison Paredes
Student# 3188723
Assignment 1, Exercise 1.1
Subtask B
*/

function noAddGrunt(msg){ //function accepts msg "telephone", promise fires timer and updates msg with "*grunt*""
    return new Promise((resolve) => {
         msg = (msg+"*grunt*");
         setTimeout(() => {resolve(msg);}, 1000);
    });
}

function noAddSmack(msg){ //function accepts msg "telephone*grunt*", promise fires timer and updates msg with "*smack*"
    return new Promise((resolve) => {
        msg = ("*smack*"+msg);
        setTimeout(() => {resolve(msg);}, 1000);
    });
}

function noAddBreath(msg){ //function accepts msg "*smack*telephone*grunt*", promise fires timer and updates msg with "*wheez*"
    return new Promise((resolve) => {
        msg = (msg+"*wheez*");
        setTimeout(() => {resolve(msg);}, 1000);
    });
}

let msg = "telephone";
//call functions in the order we will need them executed
noAddGrunt(msg) 
.then(modded => {return noAddSmack(modded);})
.then(modded => {return noAddBreath(modded);})
.then(modded => console.log(modded));
//expected outcome: *smack*telephone*grunt**wheez* 
