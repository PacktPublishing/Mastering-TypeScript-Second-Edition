import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { SideNavComponent, IApplyFilter } from './sidenav.component';
import { RightScreenComponent } from './rightscreen.component';
import { Mediator, IMediatorImpl, StateType } from './state.mediator';
import { BoardListComponent } from './boardlist.component';

import { 
    IBoardSizeItem, 
    IBoardType,
    IBoardListItem,
    IManufacturer
    } from './IBoardList';

import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';

@Component( {
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent 
    implements IMediatorImpl, AfterViewInit
{
    title = "Select an option :";
    @ViewChild(SideNavComponent)
    private sideNav : SideNavComponent;
    @ViewChild(RightScreenComponent)
    private rightScreen: RightScreenComponent;
    @ViewChild(BoardListComponent)
    private boardList: BoardListComponent;

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

showLoginPanel() {
    document.getElementById('loginPanel')
        .classList.remove('login_sidenav_fade');
    document.getElementById('loginPanel')
        .style.visibility = "visible";

};
hideLoginPanel() {
    document.getElementById('loginPanel')
        .classList.add('login_sidenav_fade');
    setTimeout(() => {
        document.getElementById('loginPanel')
            .style.visibility = "hidden";
    }, 1000);
};


    // =======================
    // IMediatorImpl functions


    // Notification handler
    // ====================
    onNotifyRightWindow(message:string):void {
        this.mediator.moveToState(
            this.mediator.getCurrentMainPanelState());
    }

    showHideSideClicked() {
        this.mediator.showHideSideNavClicked();
    }

    buttonClickedDetail() {
        this.mediator.moveToState(StateType.DetailPanel);
    }

    onNotifyBoardList(board: IBoardListItem) {
        this.rightScreen.board = board;
        this.mediator.moveToState(StateType.DetailPanel);
    }
    onNotifyFilter( filter: IApplyFilter) {
        this.boardList.applyFilter(filter);
    }

    onNotifyNavbar(message:string) {
        if (message == "Login") {
            this.mediator.moveToState(StateType.LoginPanel);
        }
    }
    onNotifyLogin(message: string) {
        this.mediator.moveToState(
            this.mediator.getCurrentMainWindowState());
    }

}
