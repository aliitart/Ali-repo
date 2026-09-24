//1
function noAddGrunt(msg){
 msg = (msg+"*grunt*");
 setTimeout(() => {console.log(msg);}, 1000);
 return msg;
}
function noAddSmack(msg){
 msg = ("*smack*"+msg);
 setTimeout(() => {console.log(msg);}, 2000);
 return msg;
}
function noAddBreath(msg){
 msg = (msg+"*wheez*");
 setTimeout(() => {console.log(msg);}, 3000);
 return msg;
}
let msg = "telephone";
let modded = noAddGrunt(msg);
modded = noAddSmack(modded);
modded = noAddBreath(modded);
//expected outcome: *smack*telephone*grunt**wheez* 


//2
function noAddGrunt(msg){
    return msg;
}

function noAddSmack(msg){
    return msg;
}

function noAddBreath(msg){
    return msg;
}
       
setTimeout(() => {msg = msg+"*grunt*"; console.log (msg);
    setTimeout(() => {msg = "*smack*"+msg; console.log (msg);
        setTimeout( () => {msg = msg+"*wheez*"; console.log (msg);
        },1000);
    },1000);
},1000);

let msg = "telephone";
let modded = noAddGrunt(msg);
modded = noAddSmack(modded);
modded = noAddBreath(modded);
console.log(modded); //expected outcome: *smack*telephone*grunt**wheez* 


//3
