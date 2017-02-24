import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)
export class Login {
  header = 'Please login';
  userName = "";
  password = "";
  ea: EventAggregator;
  constructor(EventAggregator) {
    this.ea = EventAggregator;
  }

  onSubmit() {
   var postMessage = { 
        userName: this.userName, 
        password : this.password };
    console.log(`Login.ts userName : ${this.userName}, pwd : ${this.password}`);
    console.log(`postMessage : ${postMessage}`);

    let client = new HttpClient();
    client.post('/login', postMessage)
      .then( (message) => {
        console.log(`post returned : ${message.response}`);
        this.ea.publish('login_result', {success: true});
      } )
      .catch( (err) => {
        console.log(`err.response: ${err.response}`);
      })
      ;
  }
}