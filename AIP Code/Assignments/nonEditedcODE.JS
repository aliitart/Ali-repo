function noAddGrunt(msg){
 setTimeout((msg) => {return msg+"*grunt*";}, 1000);
} //msg is overwritting outside msg, returns undefined
//return inside setTimeOut goes nowhere, so modded is undefined
function noAddSmack(msg){
 setTimeout((msg) => {return("*smack*"+msg)}, 1000);
}
function noAddBreath(msg){
 setTimeout( (msg) => {return(msg+"*wheez*")}, 1000);
}
let msg = "telephone";
let modded = noAddGrunt(msg);
modded = noAddSmack(modded);
modded = noAddBreath(modded);
console.log(modded); //expected outcome: *smack*telephone*grunt**wheez*
//modded prints instantly does not wait for timers (undefined)

