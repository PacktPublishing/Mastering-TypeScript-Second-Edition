
// interface ISystemSettings { }

// class IISystemSettings { }

// interface IGMailService { }

// class IIGMailService { }

// class ServiceLocatorGeneric {
//     public static register<T>(
//         interfaceName: {new(): T;}, instance: any) {}
//     public static resolve<T>(
//         interfaceName: {new() : T}) {}
// }

// ServiceLocatorGeneric.register(IISystemSettings, {});
// ServiceLocatorGeneric.resolve(IISystemSettings);


class Test {
    private _test: string;
    constructor(test: string) {
        this._test = test;
    }
}