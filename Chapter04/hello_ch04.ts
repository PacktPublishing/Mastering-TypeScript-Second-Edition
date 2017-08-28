//"use strict"
import "reflect-metadata";

console.log("hello_ch04");


//  Decorators
//  ==========


//  Decorator syntax
//  ================

function simpleDecorator(constructor : Function) {
    console.log('simpleDecorator called.');
}

@simpleDecorator
class ClassWithSimpleDecorator {
    
}

let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();

console.log(`instance_1 : ${instance_1}`);
console.log(`instance_2 : ${instance_2}`);


function secondDecorator(constructor : Function) {
    console.log('secondDecorator called.')
}

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorators {
    
}

//  Decorator factories
//  ===================

function decoratorFactory(name: string) {
    return function (constructor : Function ) {
        console.log(`decorator function called with : ${name}`);
    }
}

@decoratorFactory('testName')
class ClassWithDecoratorFactory {
    
}

//  Class decorator parameters
//  ==========================

function classConstructorDec(constructor: Function) {
    console.log(`constructor : ${constructor}`);
    console.log(`constructor.name : ${(<any>constructor).name}`);
    constructor.prototype.testProperty = "testProperty_value";
}

@classConstructorDec
class ClassWithConstructor {
}

let classConstrInstance = new ClassWithConstructor();
console.log(`classConstrInstance.testProperty : ` 
    + `${(<any>classConstrInstance).testProperty}`);
    

//  Property decorators
//  ===================

function propertyDec(target: any, propertyKey : string) {
    // console.log(`target : ${target}`);
    // console.log(`target.constructor : ${target.constructor}`);
    
    if(typeof(target) === 'function') {
        console.log(`class name : ${target.name}`);
    } else {
        console.log(`class name : ` 
            + `${target.constructor.name}`);    
    }
    
    console.log(`propertyKey : ${propertyKey}`);
}

class ClassWithPropertyDec {
    @propertyDec
    name: string;
}

class StaticClassWithPropertyDec {
    @propertyDec
    static name: string;
}

//  Method decorators
//  =================


function methodDec (target: any, 
    methodName: string, 
    descriptor?: PropertyDescriptor) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`target[methodName] : ${target[methodName]}`);
}

class ClassWithMethodDec {
    @methodDec
    print(output: string) {
        console.log(`ClassWithMethodDec.print` 
            + `(${output}) called.`);
    }
}


//  Using method decorators
//  =======================


function auditLogDec(target: any, 
    methodName: string, 
    descriptor?: PropertyDescriptor ) {
        
    let originalFunction = target[methodName];
    
    let auditFunction = function() {
        console.log(`auditLogDec : overide of ` 
            + ` ${methodName} called `);
        originalFunction.apply(this, arguments);
    }
    
    descriptor.value = auditFunction;
}

class ClassWithAuditDec {
    @auditLogDec
    print(output: string) {
        console.log(`ClassWithMethodDec.print` 
        + `(${output}) called.`);
    }
}

let auditClass = new ClassWithAuditDec();
auditClass.print("test");


//  Parameter decorators
//  ====================


function parameterDec(target: any, 
    methodName : string, 
    parameterIndex: number) {
    
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);    
        
}

class ClassWithParamDec {
    print(@parameterDec  value: string) {
        
    }
}

//  Decorator metadata
//  ==================

// must issue : 
// npm install reflect-metadata --save
// npm install @types/reflect-metadata --save

import 'reflect-metadata';

function metadataParameterDec(target: any, 
    methodName : string, 
    parameterIndex: number) {

   let designType = Reflect.getMetadata(
       "design:type", target, methodName);
   console.log(`designType: ${designType}`)    
   
   let designParamTypes = Reflect.getMetadata(
       "design:paramtypes", target, methodName);
   console.log(`paramtypes : ${designParamTypes}`);
   
   let designReturnType = Reflect.getMetadata(
       "design:returntype", target, methodName);
   console.log(`returntypes : ${designReturnType}`);
}


class ClassWithMetaData {
    print( 
        @metadataParameterDec 
        id: number, 
        name: string) : number {
        return 1000;
    }
}


//  Generics
//  ========

class Concatenator< T > {
    concatenateArray(inputArray: Array< T >): string {
        let returnString = "";

        for (let i = 0; i < inputArray.length; i++) {
            if (i > 0)
                returnString += ",";
            returnString += inputArray[i].toString();
        }
        return returnString;
    }
}

var stringConcat = new Concatenator<string>();
var numberConcat = new Concatenator<number>();

let concatResult = stringConcat.concatenateArray(
    ["first", "second", "third" ]);
console.log(concatResult);

var stringArray: string[] = ["first", "second", "third"];
var numberArray: number[] = [1, 2, 3];
var stringResult = 
    stringConcat.concatenateArray(stringArray);
var numberResult = 
    numberConcat.concatenateArray(numberArray);
// var stringResult2 = 
//     stringConcat.concatenateArray(numberArray);
// var numberResult2 = 
//     numberConcat.concatenateArray(stringArray);

class MyClass {
    private _name: string;
    constructor(arg1: number) {
        this._name = arg1 + "_MyClass";
    }
    toString(): string {
        return this._name;
    }
}

let myArray: MyClass[] = [
    new MyClass(1), 
    new MyClass(2), 
    new MyClass(3)];
    
let myArrayConcatentator = new Concatenator<MyClass>();
let myArrayResult = 
    myArrayConcatentator.concatenateArray(myArray);
console.log(myArrayResult);


//  Constraining the type of T
//  ==========================

enum ClubHomeCountry {
    England,
    Germany
}

interface IFootballClub {
    getName() : string;
    getHomeCountry(): ClubHomeCountry;
}

abstract class FootballClub implements IFootballClub {
    protected _name: string;
    protected _homeCountry: ClubHomeCountry;
    getName() { return this._name };
    getHomeCountry() { return this._homeCountry };
}

class Liverpool extends FootballClub {
    constructor() {
        super();
        this._name = "Liverpool F.C.";
        this._homeCountry = ClubHomeCountry.England;
    }
}

class BorussiaDortmund extends FootballClub {
    constructor() {
        super();
        this._name = "Borussia Dortmund";
        this._homeCountry = ClubHomeCountry.Germany;
    }
}

class FootballClubPrinter< T extends IFootballClub  >
    implements IFootballClubPrinter< T > {
    print(arg : T) {
        console.log(` ${arg.getName()} is ` +
            `${this.IsEnglishTeam(arg)}` +
            ` an English football team.`
        );
    }
    IsEnglishTeam(arg : T) : string {
        if ( arg.getHomeCountry() == ClubHomeCountry.England ) 
            return "";
        else
            return "NOT"
    }
}

let clubInfo = new FootballClubPrinter();
clubInfo.print(new Liverpool());
clubInfo.print(new BorussiaDortmund());


interface IFootballClubPrinter < T extends IFootballClub > {
    print(arg : T);
    IsEnglishTeam(arg : T);
}


//  Creating new objects
//  ====================


class FirstClass {
    id: number;
}

class SecondClass {
    name: string;
}

class GenericCreator< T > {
    create(arg1: { new(): T }) : T {
        return new arg1();
    }
}

var creator1 = new GenericCreator<FirstClass>();
var firstClass: FirstClass = creator1.create(FirstClass);

var creator2 = new GenericCreator<SecondClass>();
var secondClass : SecondClass = creator2.create(SecondClass);



//  Async await
//  ===========

// ensure nodejs 4 is installed : 

// sudo apt-key adv --keyserver keyserver.ubuntu.com --recv 68576280
// sudo apt-add-repository 'deb https://deb.nodesource.com/node_4.x precise main'
// sudo apt-get update
// sudo apt-get install nodejs


//  Promises
//  ========


function delayedResponseWithCallback(callback: Function) {
    function delayedAfterTimeout() {
        console.log(`delayedAfterTimeout`);
        callback();
    }
    setTimeout(delayedAfterTimeout, 1000);
}

function callDelayedAndWait() {
    function afterWait() {
        console.log(`afterWait`);
    }
    console.log(`calling delayedResponseWithCallback`);
    delayedResponseWithCallback(afterWait);
    console.log(`after callng delayedResponseWithCallback`);
}

callDelayedAndWait();

//  Promise syntax
//  ==============

function fnDelayedPromise (
    resolve: () => void, 
    reject : () => void) 
    {
        function afterTimeout() {
             resolve();
        }
        
        setTimeout( afterTimeout, 2000);
    }

function delayedResponsePromise() : Promise<void> {
    return new Promise<void>(
        fnDelayedPromise
    );
}

function delayedPromise() : Promise<void> {
    return new Promise<void> 
    ( 
        (   resolve : () => void, 
            reject: () => void 
        ) => {
            function afterTimeout() {
                resolve();
            }
            
            setTimeout( afterTimeout, 1000);
        } 
    );
}

function callDelayedPromise() {
    console.log(`calling delayedPromise`);
    delayedPromise().then(
        () => { console.log(`delayedPromise.then()`) }
    );
}

callDelayedPromise();

function errorPromise() : Promise<void> {
    return new Promise<void> 
    (
        (   resolve: () => void, 
            reject: () => void
        ) => {
          reject();
             }  
    );
}

function callErrorPromise() {
    console.log(`calling errorPromise`);
    errorPromise().then(
        () => { console.log(`no error.`) }
    ).catch(
        () => { console.log(`an error occurred`)}
    );
}

callErrorPromise();

function invokeAsync(success: Function, error : Function) {
    
}

function standardCallback() {
    function afterCallbackSuccess() {
        // execute this code
    }
    function afterCallbackError() {
        // execute on error
    }
    // invoke async function
    invokeAsync(afterCallbackSuccess, afterCallbackError);
}

function usingPromises() {
    // invoke async function
    delayedPromise().then(
        () => { 
            // execute on success
        }
    ).catch (
        () => {
            // execute on error
        }
    );
}


function delayedPromiseWithParam() : Promise<string> {
    return new Promise<string>( 
        (
            resolve: (str: string ) => void, 
            reject: (str:string ) => void 
        ) => {
            
            function afterWait() {
                resolve("resolved_within_promise");
            }
            setTimeout( afterWait , 2000 );
        } 
    );
}

function callPromiseWithParam() {
    console.log(`calling delayedPromiseWithParam`);
    delayedPromiseWithParam().then( (message: string) => {
        console.log(`Promise.then() returned ${message} `);
    } );
}

callPromiseWithParam();


interface IPromiseMessage {
    message: string;
    id: number;
}

function promiseWithInterface() : Promise<IPromiseMessage> {
    return new Promise<IPromiseMessage> (
      ( 
          resolve: (message: IPromiseMessage) => void,
          reject: (message: IPromiseMessage) => void
      )  => {
          resolve({message: "test", id: 1});
      }
    );
}

//  Async await
//  ===========


function awaitDelayed() : Promise<void> {
    return new Promise<void> (
        ( resolve: () => void,
          reject: () => void ) => 
          {
             function afterWait() {
                 console.log(`calling resolve`);
                 resolve();
             }    
             setTimeout(afterWait, 1000);
          }
    );
}

async function callAwaitDelayed() {
    console.log(`call awaitDelayed`);
    await awaitDelayed();
    console.log(`after awaitDelayed`);
}

callAwaitDelayed();

//  Async errors
//  ============

function awaitError() : Promise<string> {
    return new Promise<string> (
        ( resolve: (message: string) => void,
          reject: (error: string) => void ) => 
          {
             function afterWait() {
                 console.log(`calling reject`);
                 reject("an error occurred");
             }    
             setTimeout(afterWait, 1000);
          }
    );
}

async function callAwaitError() {
    console.log(`call awaitError`);
    try {
        await awaitError();
    } catch (error) {
        console.log(`error returned : ${error}`);
    }
    console.log(`after awaitDelayed`);
}

callAwaitError();


function simplePromises() {
    // invoke async function
    delayedPromise().then(
        () => { 
            // execute on success
        }
    ).catch (
        () => {
            // execute on error
        }
    );
    // code here does NOT wait for async call
}

async function usingAsyncSyntax() {
    try {
        await delayedPromise();
        // execute on success
    } catch(error) {
        // execute on error
    }
    // code here waits for async call
}

function asyncWithMessage() : Promise<string> {
    return new Promise<string> (
        ( resolve: (message: string ) => void,
            reject: (message: string) => void
        ) => {
            function afterWait() {
                resolve("resolve_message");
            }
            setTimeout(afterWait, 1000);
        }
    );
}

async function awaitMessage() {
    console.log(`calling asyncWithMessage`);
    let message: string = await asyncWithMessage();
    
    console.log(`message returned: ${message}`);
}

awaitMessage();

