function respondAfterDelay(ms){
    return new Promise (resolve => { //arrow function => will automatically return the value of the expression after the arrow
        setTimeout(() => resolve ("Done!"), ms);
    })
}

let simulateServer = async function(){
    console.log ("Request 1 coming in");
    console.log("Processing...");
    console.log("no further requests accepted");
    await respondAfterDelay (2000);
    console.log("Done! (req 1)");
    console.log("ready for new req");
    console.log("req 2 coming in");
    console.log ("processing");
    console.log("no further requests accepted");
    await respondAfterDelay (2000);
    console.log("done");
};

simulateServer();

