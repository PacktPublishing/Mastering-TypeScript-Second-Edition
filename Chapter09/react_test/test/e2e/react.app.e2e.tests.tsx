/// <reference path="../../typings/index.d.ts"/>

describe("simple protractor test", () => {

    beforeEach( () => {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8080/index.html');
        browser.sleep(1000);
    });
   
   it("should navigate to home and find a title", () => {
//       browser.driver.get('http://localhost:3002');
       expect(browser.driver.getTitle()).toContain("Hello React!");
   }) ;

 it('clicking a button should update selected element', () => {
     let button = by.id('select_button_1');
     expect(button).toBeDefined(); 
        element(by.id('select_button_1')).click();
        browser.sleep(1000);
        expect(element(by.id('selectedItem')).getText()).toBe('Selected : 1 - firstItem');
    });

});