// SOLUTION ONE
let printCard = function() {
    console.log(this.frontContent)
    console.log(this.insideContent)
 
    this.signatories.forEach(function(signatory){
        let message = `${this.closing[signatory]}, ${signatory}`
        console.log(message)
    }, this)
    // adding the 'this' between the end of the function and the end of the forEach provides a thisArg, explicitly providing a context for the function
    // works for forEach, map, should work for most collection-processing
}

// SOLUTION TWO

let printCard = function() {
    console.log(this.frontContent)
    console.log(this.insideContent)
 
    let outerContext = this
    // assign that value to a variable and use function-level scope and closures to regain access to the outer context.
 
    this.signatories.forEach(function(signatory){
        let message = `${outerContext.closing[signatory]}, ${signatory}`
        console.log(message)
    })
}
 
// SOLUTION THREE
// USE AN ARROW FUNCTION TO CREATE A FUNCTION WITHOUT CONTEXT
// THAT'S WHY MY CODE KEEPS NOT WORKING
// AAAHHHHHh