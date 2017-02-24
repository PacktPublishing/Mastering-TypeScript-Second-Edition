import {MyElement} from './MyElement';
import {ClickableItem} from './ClickableItem';

export class App {
  message: string = 'Select an Option:';
  currentElement: ClickableItem;
  items: ClickableItem[] = [
    { idValue: 1, displayName : "firstItem"},
    { idValue: 2, displayName : "secondItem"},
    { idValue: 3, displayName : "thirdItem"},
  ];
  constructor() {
    this.currentElement = { idValue: 0, displayName : 'none'};
  }
  onItemClicked(event: ClickableItem) {
    this.currentElement = event;
  }
}


