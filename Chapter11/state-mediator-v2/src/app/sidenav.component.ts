import { Component } from '@angular/core';

@Component( {
    selector: 'sidenav-component',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})

export class SideNavComponent {

    closeNav() {
        document.getElementById('mySidenav')
            .style.width = "0px";
    }
    
    showNav() {
        document.getElementById('mySidenav')
            .style.width = "250px";
    }

}