import {App} from '../../src/app';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';
 

// import {}'aurelia-testing', 'aurelia-bootstrapper'

describe('App tests', function () {
    var application;
    beforeAll(function () {
        application = new App();
    });
    it('message property contains Select', function () {
        expect(application.message).toContain('Select');
    });
    it('has a property named items', function () {
        expect(application.items).toBeDefined();
    });
    it('has an array of clickable items', function () {
        expect(application.items.length).toBe(3);
    });
    it('sets currentElement property in constructor', function () {
        expect(application.currentElement).toBeDefined();
    });
    it('sets currentElement.idValue to 0', function () {
        expect(application.currentElement.idValue).toBe(0);
    });
    it('sets currentElement.displayName to none', function () {
        expect(application.currentElement.displayName).toBe('none');
    });
    describe("items array tests", function () {
        var item2;
        beforeAll(function () {
            item2 = application.items[1];
        });
        it('has a second element', function () {
            expect(item2).toBeDefined();
        });
        it('second element has an idValue of 2', function () {
            expect(item2.idValue).toBe(2);
        });
        it('second element has a displaName of secondItem', function () {
            expect(item2.displayName).toBe('secondItem');
        });
    });
});
describe('App rendering tests', function () {
var application;
beforeEach(function () {
    application = StageComponent
        .withResources('app')
        .inView(
            '<require from="./ClickableItem"></require>' +
            '<h1 id="messageHeader">${message}</h1>' +
            '<ul id="ulItemList">' +
            '<li repeat.for="item of items" ' +
            'click.delegate="onItemClicked(item)">' +
            '<button id="select_button_${$index}">' + 
            '${item.displayName}</button>' +
            '</li>' +
            '</ul>' +
            '<clickable-item id-value="${currentElement.idValue}" ' +
            ' display-name="${currentElement.displayName}" ' +
            ' ></clickable-item>')
        .boundTo(new App());
});
it('should render message property', (done) => {
    application.create(bootstrap).then( () => {
        var messageHeader = document.querySelector('#messageHeader');
        expect(messageHeader).toBeDefined();
        expect(messageHeader.innerHTML).toContain('Select');
        done();
    });
});
it('should render buttons', (done) => {
    application.create(bootstrap).then( () => {
        var ulItemList = document.querySelectorAll(
            '#ulItemList > li > button');
        expect(ulItemList).toBeDefined();
        for (var i = 0; i < ulItemList.length; i++) {
            var itemElement = ulItemList[i];
            expect(itemElement.innerHTML).toContain('Item');
        }
        done();
    });
});
it('should render none as selected item', (done) => {
    application.create(bootstrap).then( () => {
        var clickableItem = document.querySelector('clickable-item');
        console.log(document);
        console.log(clickableItem.innerHTML);
        expect(clickableItem.innerHTML).toContain('none');
        done();
    });
});
    afterEach(function () {
        application.dispose();
    });
});
