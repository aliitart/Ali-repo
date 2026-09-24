/*
Alison Paredes
Student# 3188723
Assignment 1, Exercise 1.1
Subtask A
*/

//accepts msg "telephone" and returns "telephone*grunt*"
function noAddGrunt(msg){ 
    return  msg+"*grunt*";
}

//accepts msg "telephone*grunt*" and returns "*smack*telephone*grunt*"
function noAddSmack(msg){ 
    return "*smack*"+msg;
}

//accepts msg "*smack*telephone*grunt*" and returns "*smack*telephone*grunt**wheez*"
function noAddBreath(msg){ 
    return msg+"*wheez*";
}

let msg = "telephone";
let modded = noAddGrunt(msg);

setTimeout(() => {msg = noAddGrunt(msg), modded = noAddSmack(modded); //timer fires after 1000ms, msg and modded are updated
    setTimeout(() => {msg = noAddSmack(msg), modded = noAddBreath(modded); //timer fires after 2000ms, msg and modded are updated
        setTimeout( () => {msg = noAddBreath(msg), console.log(modded); //timer fires after 3000ms, msg is printed and modded prints with that value
        },1000); 
    },1000);
},1000); 

//expected outcome: *smack*telephone*grunt**wheez* 
