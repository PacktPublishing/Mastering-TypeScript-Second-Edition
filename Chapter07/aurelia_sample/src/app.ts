export class App {
  message: string = 'Select an Option:';
  items: ClickableItem[] = [
    { id: 1, displayName : "firstItem"},
    { id: 2, displayName : "secondItem"},
    { id: 3, displayName : "thirdItem"},
  ];
    onItemClicked(event: ClickableItem) {
    alert(`App.onItemClicked , event.id 
      ${event.id} - ${event.displayName}`);
  }

}

export class ClickableItem {
    displayName: string;
    id: number;
}

