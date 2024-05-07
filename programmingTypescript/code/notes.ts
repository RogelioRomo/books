//explicitly declaring types
let a: number = 1;                  //a is a number
let b: string = 'hello';            //b is a string
let c: boolean[] = [true, false];   //c is an array of booleans

//implicitly declaring types
let d = 1                           //d is a number
let e = 'hello'                     //e is a string
let f = [true, false]               //f is an array of booleans

//In general it is a good style to let TypeScript infer as many types as it can for you, keeping explicit type annotations to a minimum
