// CALL STACK
// The mechanism the js interpreter uses to keep track of its place in a scipt that calls multiple functions.

//How JS "Knows" what function is currently being run and functions are called fom within that function . 

// How the CALL STACK works
// - When a script calls a function , the interpreter adds it to the call stack and then starts carrying out the function .  

// Any functions that are called by that function are added to the call stack further up, and run where their calls are reached . 

// When the curent function is finished , the interpreter takes it off the stack an resumes execution where it left off in the last code listing . 