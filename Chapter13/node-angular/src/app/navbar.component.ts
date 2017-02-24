import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

interface IButtonName {
    ButtonName : string;
}

@Component( {
    selector: 'navbar-component',
    templateUrl: './navbar.component.html'
})


@Injectable()
export class NavbarComponent {
    menuItems : IButtonName [];

 constructor (private http: Http) {
    console.log('AppComponent constructor');
    this.http.get('/menuitems')
     .map(res => res.text())
     .subscribe(
      (data) => {
        let jsonResponse = JSON.parse(data);
        this.menuItems = jsonResponse.menuItems;
      },
      err => {
        console.log(`error : ${err}`);
      },
      () => {
        console.log(`success`);
      }
    );
  }

}