import { Component, EventEmitter, Output } from '@angular/core';

export enum FilterType {
    Manufacturer,
    BoardType,
    None
}

interface IFilter {
    filterName: string;
    filterType: FilterType;
    filterValues?: string [];    
}

export interface IApplyFilter {
    filterType: FilterType;
    filterValue : string;
}

@Component( {
    selector: 'sidenav-component',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})

export class SideNavComponent {

    @Output() notify: EventEmitter<IApplyFilter> 
        = new EventEmitter<IApplyFilter>();

    filterList: IFilter [] = [
    {
        filterName: 'Manufacturer',
        filterType: FilterType.Manufacturer,
        filterValues: ['RRD', 'JP Australia', 'Starboard']
    },
    {
        filterName: 'Board Types',
        filterType: FilterType.BoardType,
        filterValues: ['Wave', 'Freestyle', 'Slalom']
    },
    {
        filterName: 'All',
        filterType: FilterType.None,
        filterValues: ['Clear Filter']
    }
    ]

    closeNav() {
        document.getElementById('mySidenav')
            .style.width = "0px";
    }
    
    showNav() {
        document.getElementById('mySidenav')
            .style.width = "250px";
    }

filterClicked(filter: IFilter, filterValue: string) {
    this.notify.emit(
        {
            filterType : filter.filterType, 
            filterValue: filterValue
        });
}

}