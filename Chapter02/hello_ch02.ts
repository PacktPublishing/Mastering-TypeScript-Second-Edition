
console.log('ch02');

// Type syntax
// ===========
function doCalculation(
    a : number,
    b : number,
    c : number) {
    return ( a * b ) + c;
}

var result = doCalculation(3,2,1);
console.log("doCalculation():" + result);

// causes compilation errors
// result = doCalculation("1", "2", "3");
// console.log("doCalculation():" + result);

var myString : string;
var myNumber : number;
var myBoolean : boolean;

myString = "1";
myNumber = 1;
myBoolean = true;

// causes compilation errors
// myString = myNumber;
// myBoolean = myString;
// myNumber = myBoolean;

myString = myNumber.toString();
myBoolean = (myString === "test");
if (myBoolean) {
    myNumber = 1;
}

// Inferred typing
// ===============

var inferredString = "this is a string";
var inferredNumber = 1;
// causes compilation errors
//inferredString = inferredNumber;




// Duck typing
// ===========
var complexType = { name: "myName", id : 1 };
complexType = { id: 2, name : "anotherName" };
// generates a compile error
// complexType = { id: 1};
//complexType = { name : "extraproperty", id : 2, extraProp: true };


// Template strings
// ================
var myVariable = "test";
console.log("myVariable=" + myVariable);

console.log(`myVariable=${myVariable}`);

console.log(`complexType: ${complexType.id} ${complexType.name}`);

// genrates a compile error
//complexType = { id: 2 };


// Arrays
// ======
var arrayOfNumbers: number [] = [1,2,3];
arrayOfNumbers = [3,4,5,6,7,8,9];
console.log(`arrayOfNumbers: ${arrayOfNumbers}`);
// generates a compile error
//arrayOfNumbers = ["1", "2", "3"];

console.log(`arrayOfNumbers: ${arrayOfNumbers}`);


// For ... of
// ==========

var arrayOfStrings : string[] = ["first", "second", "third"];

for( var i = 0; i < arrayOfStrings.length; i++ ) {
    console.log(`arrayOfStrings[${i}] = ${arrayOfStrings[i]}`);
}

for( var itemKey in arrayOfStrings) {
    var itemValue = arrayOfStrings[itemKey];
    console.log(`arrayOfStrings[${itemKey}] = ${itemValue}`);
}

for( var arrayItem of arrayOfStrings ) {
    console.log(`arrayItem = ${arrayItem} `);
}

// Const and let
// =============

// with strictNullChecks, this generates an error
// console.log(`anyValue = ${anyValue}`);
var anyValue = 2;
console.log(`anyValue = ${anyValue}`);

// generates a compile error
//console.log(`letValue = ${lValue}`);
let lValue = 2;
console.log(`lValue = ${lValue}`);

if (lValue == 2) {
    let lValue = 2001;
    console.log(`block scoped lValue : ${lValue} `);
}
console.log(`lValue = ${lValue}`);



const constValue = "test";
// generates a compile error
//constValue = "updated";


// The any type
// ============
var item1 : any = { id: 1, name : "item 1"};
item1 = { id : 2};

var item1 = <any> { id: 1, name : "item 1"};
item1 = { id : 2};


// Enums
// =====
enum DoorState {
    Open,
    Closed,
    Ajar
}

var openDoor = DoorState.Open;
console.log(`openDoor is: ${openDoor}`);

var closedDoor = DoorState["Closed"];
console.log(`closedDoor is : ${closedDoor}`);

var ajarDoor = DoorState[2];
console.log(`ajarDoor is : ${ajarDoor}`);


// Const enums
// ===========
const enum DoorStateConst {
    Open,
    Closed,
    Ajar
}

var constDoorOpen = DoorStateConst.Open;
console.log(`constDoorOpen is : ${constDoorOpen}`);

// generates a compile error
//console.log(`${DoorStateConst[0]}`);

console.log(`${DoorStateConst["Open"]}`);


// Functions
// =========
function addNumbers(a: number, b: number) : string  {
    // generates a compile error
    // return (a + b);
    return (a + b).toString();
}
var addResult = addNumbers(2,3);
console.log(`addNumbers returned : ${addResult}`);


// Anonymous functions
// ===================

var addFunction = function(a:number, b:number) : number {
    return a + b;
}

var addFunctionResult = addFunction(2,3);
console.log(`addFunctionResult : ${addFunctionResult}`);


// Optional parameters
// ===================
function concatStrings( a: string, b: string, c?: string) {
    return a + b + c;
}

var concat3strings = concatStrings("a", "b", "c");
console.log(`concat3strings : ${concat3strings}`);
var concat2strings = concatStrings("a", "b");
console.log(`concat2strings : ${concat2strings}`);
// generates a compile error
//var concat1string = concatStrings("a");


// Default parameters
// ==================
function concatStringsDefault( a: string, b: string, c: string = "c") {
    return a + b + c;
}

var defaultConcat = concatStringsDefault("a", "b");
console.log(`defaultConcat : ${defaultConcat}`);


// Rest parameters
// ===============
function testArguments(... argArray: number []) {
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log(`argArray[${i}] = ${argArray[i]}`);
            // use JavaScript arguments variable
            console.log(`arguments[${i}] = ${arguments[i]}`)
        }
    }
}

testArguments(9);
testArguments(1,2,3);


function testNormalAndRestArguments(
    arg1: string,
    arg2, number,
    ...argArray: number[]
) {
    
}


// Function callbacks
// ==================

function callbackFunction(text: string) {
    console.log(`inside callbackFunction ${text}`);
}

function doSomethingWithACallback(
    initialText: string, 
    callback : (initialText: string) => void
    ) {
    console.log(`inside doSomethingWithCallback ${initialText}`);
    callback(initialText);
} 

doSomethingWithACallback("myText", callbackFunction);

//doSomethingWithACallback("myText", "this is not a function");

function callbackFunctionWithNumber(arg1: number) {
    console.log(`inside callbackFunctionWithNumber ${arg1}`)
}
// generates a compile error
//doSomethingWithACallback("myText", callbackFunctionWithNumber);



// Function overloads
// ==================

function add(a: string, b: string) : string;
function add(a: number, b:number) : number;
function add(a: any, b: any): any {
    return a + b;
}

console.log(`add(1,1)= ${add(1,1)}`);
console.log(`add("1","1")= ${add("1","1")}`);

//console.log(`add(true,false)= ${add(true,false)}`);


// Union types
// ===========
var unionType : string | number;

unionType = 1;
console.log(`unionType : ${unionType}`);

unionType = "test";
console.log(`unionType : ${unionType}`);

function addWithUnion( arg1: string | number, arg2: string | number) {
    
    return arg1.toString() + arg2.toString();
}
console.log(`addWithUnion(1,2)= ${addWithUnion(1,2)}`) ;
console.log(`addWithUnion("1","2")= ${addWithUnion("1","2")}`) ;
 


// Type guards
// ===========
function addWithTypeGuard(
    arg1 : string | number,
    arg2 : string | number
    ) : string | number     
    {
    if( typeof arg1 ==="string") {
        // arg1 is treated as string within this code
        console.log('first argument is a string');
        return arg1 + arg2;
    } 
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // arg1 and arg2 are treated as numbers within this code
        console.log('both arguments are numbers');
        return arg1 + arg2;
    }
    console.log('default return');
    return arg1.toString() + arg2.toString();
}

console.log(`addWithTypeGuard(1,2)= ${addWithTypeGuard(1,2)}`) ;
console.log(`addWithTypeGuard("1","2")= ${addWithTypeGuard("1","2")}`) ;
console.log(`addWithTypeGuard(1,"2")= ${addWithTypeGuard(1,"2")}`) ;



// Type aliases
// ============
type StringOrNumber = string | number;

function addWithAlias(
    arg1 : StringOrNumber,
    arg2 : StringOrNumber
) {
    return arg1.toString() + arg2.toString();
}

type CallbackWithString = (string) => void;

function usingCallbackWithString( callback: CallbackWithString) {
    callback("this is a string");
}


// null and undefined
// ==================
let x : number | undefined;

x = 1;
x = undefined;
// x = null;

let y : number | null;

// with strictNullChecks causes compile error
// y = undefined;
y = null;

function testUndef(test : null | number) {
    console.log('test parameter :' + test);
}

testUndef(null);
testUndef(1);

  

// object rest and spread
// ======================
let firstObj = { id: 1, name : "firstObj"};

let secondObj = { ...firstObj };
console.log(`secondObj.id : ${secondObj.id}`);
console.log(`secondObj.name : ${secondObj.name}`);

let nameObj = { name : "nameObj"};
let idObj = { id : 2};

let obj3 = { ...nameObj, ...idObj };
console.log(`obj3.id : ${obj3.id}`);
console.log(`obj3.name : ${obj3.name}`);

let obj4 = { ...firstObj, ...idObj };
console.log(`obj4.id : ${obj4.id}`);
console.log(`obj4.name : ${obj4.name}`);



















