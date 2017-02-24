import { browser } from 'protractor';

describe("simple protractor test", () => {
   it("should navigate to google and find a title", () => {
       browser.driver.get('http://www.google.com');
       expect(browser.driver.getTitle()).toContain("Google");
   }) ;
});