import {AppComponent, ClickableItem} from "../app/app.component"

import {TestComponentBuilder} 
    from '@angular/compiler/testing'
import {it, describe, expect, inject, 
        beforeEach,beforeEachProviders, async } 
    from '@angular/core/testing'

import {setBaseTestProviders} 
    from '@angular/core/testing';
import {TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
        TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS} 
    from '@angular/platform-browser-dynamic/testing';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe("tests/app.component.tests.ts ", () => {

    let appComponent;
    beforeAll( () => {
        appComponent = new AppComponent();
    });

    it("should construct an AppComponent", () => {
        expect(appComponent).toBeDefined();
    });
    it('should set title', () => {
        expect(appComponent.title)
            .toContain('Select an option');
    });
    it('should set selectedItem.id', () => {
        expect(appComponent.selectedItem.id).toBe(0);
    });
    it('should set selectedItem.displayName', () => {
        expect(appComponent.selectedItem.displayName)
            .toBe('none');
    });
});

describe('TestComponentBuilder tests', () => {

    let tcb;
    beforeEachProviders( () => 
        [
            TestComponentBuilder, 
            AppComponent, 
            ClickableItem
        ] 
    );
    beforeEach( 
        inject( [TestComponentBuilder], 
            (_tcb : TestComponentBuilder) => 
            {
                console.log('setting tcb');
                tcb = _tcb; 
            } 
        )
    );

it('should render to the DOM ', done => {
    tcb
    .createAsync(AppComponent).then( fixture => {
        fixture.detectChanges();

        let element = fixture.nativeElement;
        
        let selectedDiv = element.querySelector(
            '#selectedItemText');
        expect(selectedDiv.innerHTML).toContain('0 - none');

        done();
    })
    .catch(e => done.fail(e));
});

it('should update DOM when button clicked', done => {
    tcb
    .createAsync(AppComponent).then( fixture => {
        // update DOM
        fixture.detectChanges();

        let element = fixture.nativeElement;
        let button_1 = element.querySelector('#select_button_0');

        button_1.click();

        // update DOM again            
        fixture.detectChanges();

        let selectedDiv = element.querySelector('#selectedItemText');
        expect(selectedDiv.innerHTML).toContain('firstItem');

        done();
    })
    .catch(e => done.fail(e));
});
});