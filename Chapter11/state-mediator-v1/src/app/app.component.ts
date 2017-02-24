import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [
  //   require('bootstrap/dist/css/bootstrap')
  // ]
})
export class AppComponent {
  title = 'Select an option :';
      isSideNavVisible = true;
    showHideSideClicked() {
        if (this.isSideNavVisible) {
            document.getElementById('main')
                .style.marginLeft = "0px";
            document.getElementById('mySidenav')
                .style.width = "0px";
            this.isSideNavVisible = false;
        } else {
            document.getElementById('main')
                .style.marginLeft = "250px";
            document.getElementById('mySidenav')
                .style.width = "250px";
            this.isSideNavVisible = true;
        }
    }

    buttonClickedDetail() {
    document.getElementById('myRightScreen')
        .style.transform = "translateX(0%)";
    document.getElementById('main')
        .style.transform = "translateX(-100%)";
    }

closeClicked() {
    document.getElementById('myRightScreen')
        .style.transform = "translateX(100%)";
    document.getElementById('main')
        .style.transform = "translateX(0%)";
}

}
