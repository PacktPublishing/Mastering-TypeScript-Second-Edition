/// <reference path="../typings/index.d.ts" />

import * as React from 'react';

export class ClickableItem {
    displayName: string;
    id: number;
}

export interface IArrayViewProps { 
    title: string,
    items: ClickableItem[],
    selectedItem?: ClickableItem
};

export class ArrayView extends 
    React.Component<IArrayViewProps, {}> {
    selectedItem: ClickableItem;
    constructor() {
        super();
        this.selectedItem = { id: 0, displayName: 'none'};

    }

render() {

    return ( <div>
        <h1>{this.props.title}</h1>
            <ul>
                {this.props.items.map( function(item,i) {
return (
<li key={i} onClick={this.handleClick.bind(this, i, item)}>
    <button id={'select_button_' + item.id} >                 
    {item.displayName}</button>
</li>
);
                }, this)}
            </ul>

<div id="selectedItem">Selected : {this.selectedItem.id} - {this.selectedItem.displayName}</div>
        </div>
        
    );
}
handleClick(i : number, props: any) {
    //console.log(`handleClick : ${props}`);
    this.selectedItem = props;
    this.forceUpdate();
}       
}

