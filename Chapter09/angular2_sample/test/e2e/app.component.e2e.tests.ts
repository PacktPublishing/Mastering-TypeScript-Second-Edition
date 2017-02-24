describe("simple protractor test", () => {

    beforeEach( () => {
        browser.get('http://localhost:3002');
        browser.sleep(1000);
    });
   
   it("should navigate to home and find a title", () => {
//       browser.driver.get('http://localhost:3002');
       expect(browser.driver.getTitle()).toContain("Angular");
   }) ;

 it('clicking a button should update selected element', () => {
     let button = by.id('select_button_0');
     expect(button).toBeDefined(); 
        element(by.id('select_button_0')).click();
        browser.sleep(1000);
        expect(element(by.id('selectedItemText')).getText()).toBe('Selected : 1 - firstItem');
    });

});