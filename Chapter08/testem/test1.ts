describe("tests/01_SimpleJasmineTests.ts ", () => {
    it("value that has been assigned should be defined", () => {
        var undefinedValue = "test";
        expect(undefinedValue).toBeDefined();
    });
it("exptect a value not to be defined", () => {
    var undefinedValue;
    expect(undefinedValue).not.toBeDefined();
});

it("expect value toBe(2)", () => {
    var twoValue = 2;
    expect(twoValue).toBe(2);
})
it("expect string toContain value ", () => {
    var testString = "12345a";
    expect(testString).toContain("a");
});
it("expect true to be truthy", () => {
    var trueValue = true;
    expect(trueValue).toBeTruthy();
});
it("expect false not to be truthy", () => {
    var falseValue = false;
    expect(falseValue).not.toBeTruthy();
});

it("expect value not to be null", () => {
    var definedValue = 2;
    expect(definedValue).not.toBe(null);
});

it("expect objects to be equal", () => {
    var obj1 = {a : 1, b : 2};
    var obj2 = {b : 2, a : 1};

    expect(obj1).toEqual(obj2);
});

describe("beforEach and afterEach tests", () => {
    var myString;
    beforeEach( () => {
        myString = "this is a string";
    });
    afterEach( () => {
        expect(myString).toBeUndefined();
    });
    it("should find then clear the myString varialbe", () => {
        expect(myString).toEqual("this is a string");
        myString = undefined;
    });
});

describe("data driven tests", () => {
    using("valid values", [
        "first string",
        "second string",
        "third string"
    ], (value) => {
        it(`${value} should contain 'string'`, () => {
            expect(value).toContain("string");
        });
    });
});

class MySpiedClass {
    testFunction(arg1: string) {
        console.log(arg1);
    }
}
describe("simple spy", () => {
    it("should spyOn a function call", () => {
        var classInstance = new MySpiedClass();
        var testFunctionSpy 
            = spyOn(classInstance, 'testFunction');

        classInstance.testFunction("test");
        
        expect(testFunctionSpy).toHaveBeenCalled();
    });
});


class CallbackClass {
    doCallBack(id: number, callback: (result: string) => void ) {
        var callbackValue = "id:" + id.toString();
        callback(callbackValue);
    }
}

class DoCallBack {
    logValue(value: string) {
        console.log(value);
    }
}

describe("using callback spies", () => {
    it("should execute callback with the correct string value", 
        () => {
        var doCallback = new DoCallBack();
        var classUnderTest = new CallbackClass();

        var callbackSpy = spyOn(doCallback, 'logValue');
        classUnderTest.doCallBack(1, doCallback.logValue);

        expect(callbackSpy).toHaveBeenCalled();
        expect(callbackSpy).toHaveBeenCalledWith("id:1");

    });
});

class ClassToFake {
    getValue() : number {
        return 2;
    }
}
describe("using fakes", () => {
    it("calls fake instead of real function", () => {
        var classToFake = new ClassToFake();
        spyOn(classToFake, 'getValue').and.callFake ( () => {
            return 5;
        });
        expect(classToFake.getValue()).toBe(5);
    });
});

class MockAsyncClass {
    executeSlowFunction(success: (value: string) => void) {
        setTimeout(() => {
            success("success");
        }, 1000);
    }
}

describe("asynchronous tests", () => {
    xit("failing test", () => {
    
        var mockAsync = new MockAsyncClass();
        var returnedValue;
        mockAsync.executeSlowFunction((value: string) => {
            returnedValue = value;
        });
        expect(returnedValue).toEqual("success");
    });
    
});

describe("asynch tests with done", () => {
    var returnedValue;

    beforeEach((done) => {
        returnedValue = "no_return_value";
        var mockAsync = new MockAsyncClass();
        mockAsync.executeSlowFunction((value: string) => {
            returnedValue = value;
            done();
        });
    });

    it("should return success after 1 second", (done) => {
        expect(returnedValue).toEqual("success");
        done();
    });
});

class ModifyDomElement {
    setHtml() {
        var elem = $('#my_div');
        elem.html('<p>Hello World</p>');
    }
}

describe("fixture tests", () => {
    it("should modify a dom element", () => {
        setFixtures('<div id="my_div"></div>');
        var modifyDom = new ModifyDomElement();
        modifyDom.setHtml();
        var modifiedDomElement = $('#my_div');
        expect(modifiedDomElement.length).toBeGreaterThan(0);
        expect(modifiedDomElement.html()).toContain("Hello");
    });
});

describe("click event tests", () => {
    it("should trigger an onclick DOM event", () =>{
        setFixtures(`
            <script>
            function handle_my_click_div_clicked() { 
                // do nothing at this time
            }
            </script>        
            <div id='my_click_div'
            onclick='handle_my_click_div_clicked()'>Click Here</div>`);
        var clickEventSpy = spyOnEvent('#my_click_div', 'click');
        $('#my_click_div').click();
        expect(clickEventSpy).toHaveBeenTriggered();
    });
});



});