function noAddGrunt(msg){
 msg = (msg+"*grunt*");
 setTimeout(() => {console.log(msg);}, 1000);
 return msg;
}
function noAddSmack(msg){
 msg = ("*smack*"+msg);
 setTimeout(() => {console.log(msg);}, 1000);
 return msg;
}
function noAddBreath(msg){
 msg = (msg+"*wheez*");
 setTimeout(() => {console.log(msg);}, 1000);
 return msg;
}
let msg = "telephone";
let modded = noAddGrunt(msg);
modded = noAddSmack(modded);
modded = noAddBreath(modded);