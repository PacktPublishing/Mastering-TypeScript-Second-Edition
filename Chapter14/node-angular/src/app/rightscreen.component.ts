import { Component, EventEmitter, Output } from '@angular/core';
import { 
    IBoardSizeItem, 
    IBoardType,
    IBoardListItem,
    IManufacturer
    } from './IBoardList';

@Component( {
    selector: 'rightscreen-component',
    templateUrl: './rightscreen.component.html',
    styleUrls: ['./rightscreen.component.css']
})

export class RightScreenComponent 
{
    board: IBoardListItem = { name: 'no board selected'};
    
    @Output() notify: EventEmitter<string> 
        = new EventEmitter<string>();

    closeClicked() {
        this.notify.emit('Click from nested component');
    }

    closeRightWindow() {
        document.getElementById('myRightScreen')
            .style.transform = "translateX(100%)";
    }

    openRightWindow() {
        document.getElementById('myRightScreen')
            .style.transform = "translateX(0%)";
    }
}