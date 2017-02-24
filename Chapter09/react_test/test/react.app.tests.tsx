import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import {ArrayView, ClickableItem} from '../app/ReactApp';

describe('ArrayView model tests', () => {
    it('should create a new ArrayView', () => {
        var app = new ArrayView();
        expect(app).toBeDefined();
        expect(app.selectedItem.id).toBe(0);
        expect(app.selectedItem.displayName).toBe('none');
    });
});

describe('ArrayView tests', () => {
    let renderer : any;

    let ClickableItemArray : ClickableItem[] = [
        { id: 1, displayName : "firstItem"},
        { id: 2, displayName : "secondItem"},
        { id: 3, displayName : "thirdItem"},
    ]; 

    beforeEach( () => {
        renderer = TestUtils.renderIntoDocument(
            <ArrayView items={ClickableItemArray} title="Select an option:"  />);
    });

    it('should render none selected', () => {

        let domNode = ReactDOM.findDOMNode(renderer);
        let selectedItem = domNode.querySelector('#selectedItem');
        expect(selectedItem.textContent).toBe('Selected : 0 - none');

    });

    it('should find select_button_1', () => {

        let domNode = ReactDOM.findDOMNode(renderer);

        let button_1 = domNode.querySelector('#select_button_1');
        expect(button_1).toBeDefined();
        expect(button_1.innerHTML).toBe('firstItem');

    });

it('click select_button_1 should update dom', () => {

    let domNode = ReactDOM.findDOMNode(renderer);

    let button_1 = domNode.querySelector('#select_button_1');
    TestUtils.Simulate.click(button_1);
    
    let selectedItem = domNode.querySelector('#selectedItem');
    expect(selectedItem.textContent).toContain('1 - firstItem');

});
});