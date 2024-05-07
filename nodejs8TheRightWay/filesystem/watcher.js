'use strict' //strict mode in Node.js. This disallows certain actions, such as using undeclared variables, and other problematic actions that might cause bugs in the future.

const fs = require('fs') //a const to setup the file system module
fs.watch('target.txt', () => console.log('File changed!')) //we call the watch method of the fs module. This takes a path to a file and a callback function to invoke whenever the file changes.   
console.log('Now watching target.txt for changes...') //we log a message to the console

//Arrow functions should be the preferred way to define functions in JavaScript. They don't create a new scope and they don't rebind the value of this.

//This file tuns like this:
//It loads the script, running all the way through to the last line, which produces the Now watching message in the console.
//It sees that there's more to do beacause of the call to fs.watch().
//It waits for something to happen-namely, for the fs module to obnserve a change to the file.
//It executes our callback function when the change is detected.
//It determines that the program still has not finished, and resumes waiting.