declare function trace(arg: string | number | boolean);
declare function trace(arg: {id:number, name: string});

declare module FirstNamespace {
    module SecondNamespace {
        module ThirdNamespace {
            function log(msg: string);
        }
    }
}

declare class MyClass {
    
}

declare module OuterName {
    module InnerName {
        class NestedClass {}
    }
}

declare class MyClassConstructor {
    constructor();
    constructor(id:number);
}

declare class ClassWithProperty {
    id: number;
}

declare class ClassWithFunction {
    functionToRun() : void;
}

declare class StaticClass {
    static staticId: number;
    static staticFunction(): void;
}

declare function globalLogError(msg: string);

declare function describe( name: string, functionDef: () => void);

interface IOptionalProperties {
    id? : number;
    name? : string;
}

declare class ClassWithOptionals {
    constructor(options? : IOptionalProperties);
}

declare function fnWithProperty(id: number);

declare module fnWithProperty {
    var name : string;
}
