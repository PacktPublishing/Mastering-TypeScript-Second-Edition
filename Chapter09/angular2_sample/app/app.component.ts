import { Component } from '@angular/core';

@Component( {
    selector : 'my-app',
    template : `<h1>{{title}}</h1>
        <ul>
            <li *ngFor="let item of items; let i = index"
                (click)="onSelect(item)">
                <button id='select_button_{{i}}'>
                    {{item.displayName}} {{i}}
                </button>
            </li>
        </ul>
        <div *ngIf="selectedItem">
            <div id='selectedItemText'>
                Selected : {{selectedItem.id}} - {{selectedItem.displayName}}
            </div>
        </div>`
})
export class AppComponent {
    title = "Select an option :";
    items = ClickableItemArray;
    selectedItem : ClickableItem;
    constructor() {
        this.selectedItem = {id: 0, displayName: "none"};
    }
    onSelect(selectedItem: ClickableItem) {
        this.selectedItem = selectedItem;
        console.log(`onSelect : ${this.selectedItem.id}`);
    }
}

export class ClickableItem {
    displayName: string;
    id: number;
}

let ClickableItemArray : ClickableItem[] = [
    { id: 1, displayName : "firstItem"},
    { id: 2, displayName : "secondItem"},
    { id: 3, displayName : "thirdItem"},
];




