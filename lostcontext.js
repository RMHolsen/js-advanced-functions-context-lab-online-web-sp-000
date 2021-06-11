let configuration = {
    frontContent: "Happy Birthday, Odin One-Eye!",
    insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
    closing: {
        "Thor": "Admiration, respect, and love",
        "Loki": "Your son"
    },
    signatories: [
        "Thor",
        "Loki"
    ]
}

let printCard = function() {
    console.log(this.frontContent)
    // print the front content
    console.log(this.insideContent)
    // print the back content
 
    this.signatories.forEach(function(signatory){
        let message = `${this.closing[signatory]}, ${signatory}`
        // append the closing to the name
        console.log(message)
        // print the name
    })
}
 
printCard.call(configuration)
// fills the card with the data from the above object and prints. supposedly this should work 

/* FROM THE READING: 
The console.log() statements reveal the bug. Inside the forEach, the execution context is not the configuration Object we used as a this argument when calling the function printCard. Instead, the this inside the function expression passed to forEach is the global object (window or global). */

/* SOLUTION ONE
 */