import { Component, Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { 
    IBoardSizeItem, 
    IBoardType,
    IBoardListItem,
    IManufacturer
    } from './IBoardList';

import { IApplyFilter, FilterType } from './sidenav.component';    

@Component( {
    selector: 'boardlist-component',
    templateUrl: './boardlist.component.html',
    styleUrls: ['./boardlist.component.css']
})
@Injectable()
export class BoardListComponent {

    manufacturerList: IManufacturer [];
    currentList: IManufacturer [];


    
    constructor(private http: Http) {
     console.log(`BoardListComponent constructor`);
     this.http.get('/boards')
        .map(res => res.text())
        .subscribe(
        (data) => {
            let jsonResponse = JSON.parse(data);
            this.manufacturerList = this.currentList = jsonResponse;
        },
        err => {
            console.log(`error : ${err}`);
        },
        () => {
            console.log(`success`);
        }
        );
    }

    @Output() notify: EventEmitter<IBoardListItem>
        = new EventEmitter<IBoardListItem>();  

    boardClicked(board: IBoardListItem) {
        console.log(`clicked: ${board.name}`);
        this.notify.emit(board);
    }

    applyFilter( filter: IApplyFilter) {

        this.currentList = new Array();

        if (filter.filterType == FilterType.Manufacturer) {
            for (let manuf of this.manufacturerList) {
                if (manuf.manufacturer == filter.filterValue) {
                    this.currentList.push(manuf);
                }
            }
        }

        if (filter.filterType == FilterType.BoardType) {
            for (let manuf of this.manufacturerList) {
                let currentManf : IManufacturer =  { 
                    manufacturer : manuf.manufacturer, 
                    manufacturer_logo : manuf.manufacturer_logo };
                currentManf.boards = new Array();
                let boardFound = false;
                for (let board of manuf.boards) {
                    //if (board.board_types)
                    for (let boardtype of board.board_types) {
                        if (boardtype.board_type == filter.filterValue) {
                            boardFound = true;
                            currentManf.boards.push(board);
                        }
                    }
                }
                if (boardFound) {
                    this.currentList.push(currentManf);
                }
            }
        }

        if (filter.filterType == FilterType.None) {
            this.currentList = this.manufacturerList;
        }
    }
}