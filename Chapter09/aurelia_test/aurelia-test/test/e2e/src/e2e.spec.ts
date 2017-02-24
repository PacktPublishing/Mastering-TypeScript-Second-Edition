describe('Aurelia end-to-end tests', () => {

    beforeEach( () => {
        browser.get('http://localhost:9000');
        browser.sleep(1000);
    });

    it('should load page', () => {
            expect(browser.getTitle()).toBe('Aurelia');
    });

    it('should find an h1 element with Select an Option', () => {
        expect(element(by.css('h1'))
            .getText()).toContain("Select");
    });

it('should find 0 as selected element', () => {
    expect(element(by.id('selectedElement'))
        .getText()).toBe('Selected Element: 0 - none');
});

    it('should find first button', () => {
        expect(element(by.id('select_button_0'))
            .getText()).toBe("firstItem");
    });

it('clicking a button should update selected element', () => {
    element(by.id('select_button_0')).click();
    browser.sleep(500);
    expect(element(by.id('selectedElement'))
        .getText()).toBe('Selected Element: 1 - firstItem');
});

});

//https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/

