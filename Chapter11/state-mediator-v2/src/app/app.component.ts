import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { SideNavComponent } from './sidenav.component';
import { RightScreenComponent } from './rightscreen.component';
import { Mediator, IMediatorImpl, StateType } from './state.mediator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [
  //   require('bootstrap/dist/css/bootstrap')
  // ]
})
export class AppComponent 
    implements IMediatorImpl, AfterViewInit
    {
  title = 'Select an option :';
    @ViewChild(SideNavComponent)
    private sideNav : SideNavComponent;
    @ViewChild(RightScreenComponent)
    private rightScreen: RightScreenComponent;

    mediator: Mediator = new Mediator(this);
    ngAfterViewInit() {
        this.mediator.moveToState(StateType.MainPanelOnly);
    }

    // IMediatorImpl functions
    // =======================
    showNavPanel() {
        this.sideNav.showNav();
        document.getElementById('main').style.marginLeft = "250px";
    }
    hideNavPanel() {
        this.sideNav.closeNav();
        document.getElementById('main').style.marginLeft = "0px";
    }
    showDetailPanel() {
        this.rightScreen.openRightWindow();
        document.getElementById('main').style.transform = "translateX(-100%)";
    }
    hideDetailPanel() {
        this.rightScreen.closeRightWindow();
        document.getElementById('main').style.transform = "translateX(0%)";
    }
    changeShowHideSideButton(fromClass: string, toClass: string) {
        if (fromClass.length > 0 && toClass.length > 0) {
            document.getElementById('show-hide-side-button')
                .classList.remove(fromClass);
            document.getElementById('show-hide-side-button')
                .classList.add(toClass);
        }
    }

//       isSideNavVisible = true;
//     showHideSideClicked() {
//         if (this.isSideNavVisible) {
//             document.getElementById('main')
//                 .style.marginLeft = "0px";
//             document.getElementById('mySidenav')
//                 .style.width = "0px";
//             this.isSideNavVisible = false;
//         } else {
//             document.getElementById('main')
//                 .style.marginLeft = "250px";
//             document.getElementById('mySidenav')
//                 .style.width = "250px";
//             this.isSideNavVisible = true;
//         }
//     }

//     buttonClickedDetail() {
//     document.getElementById('myRightScreen')
//         .style.transform = "translateX(0%)";
//     document.getElementById('main')
//         .style.transform = "translateX(-100%)";
//     }

// closeClicked() {
//     document.getElementById('myRightScreen')
//         .style.transform = "translateX(100%)";
//     document.getElementById('main')
//         .style.transform = "translateX(0%)";
// }

    // Notification handler
    // ====================
    onNotifyRightWindow(message:string):void {
       this.mediator.moveToState(
            this.mediator.getCurrentMainPanelState());
  }

    buttonClickedDetail() {
        this.mediator.moveToState(StateType.DetailPanel);
    }

    showHideSideClicked() {
        this.mediator.showHideSideNavClicked();
    }


}
