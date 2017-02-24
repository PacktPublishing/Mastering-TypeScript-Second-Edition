import { Component, Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component( {
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent {
    userName: string ;
    password: string ;
constructor(private http: Http) {
}

    @Output() notify: EventEmitter<string>
        = new EventEmitter<string>();  

loginClicked() {
    console.log(`this.userName : ${this.userName}`);
    console.log(`this.password : ${this.password}`);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let jsonPacket = { 
        userName : this.userName , 
        password : this.password };

    this.http.post('/login', jsonPacket , {
        headers: headers
    })
    .map(res => res.text())
    .subscribe(
        data => data,
        err => {
        console.log(`error : ${err}`);
        },
        () => {
        console.log(`success`);
            this.notify.emit("LOGIN_SUCCESSFUL");
        }
    );
    }

}

