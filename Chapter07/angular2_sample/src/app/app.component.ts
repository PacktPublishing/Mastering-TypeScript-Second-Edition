import { Component } from '@angular/core';

export class ClickableItem {
    displayName: string;
    id: number;
}

let ClickableItemArray : ClickableItem[] = [
    { id: 1, displayName : "firstItem"},
    { id: 2, displayName : "secondItem"},
    { id: 3, displayName : "thirdItem"},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello angular !';
  items = ClickableItemArray;
  onSelect(selectedItem: ClickableItem) {
        alert(`onSelect : id=${selectedItem.id} 
            displayName=${selectedItem.displayName}`);
    }
}
