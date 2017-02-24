import {HttpClient} from 'aurelia-http-client';
import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

interface IMenuItem {
  ButtonName: string;
}

@inject(EventAggregator)
export class App {
  message = 'Hello World!';
  menuItems: IMenuItem[] = [];
  // menuItems: IMenuItem[] = [
  //   {ButtonName : 'About'},
  //   {ButtonName : 'Contact Us'}
  //   ];

  ea: EventAggregator;
  isLoginVisible = true;
  
  constructor(EventAggregator?) {
    this.ea = EventAggregator;
    // this.ea.subscribe('login_result', (response) => {
    //     console.log(`App.loginResult() : ${response.success}`);
    // });
    _.bindAll(this, 'loginResult');
    this.ea.subscribe('login_result', this.loginResult);

    let client = new HttpClient();

    client.get('/menuitems')
      .then((data) => {
        console.log(`data: ${data.response}`);
        let jsonResponse = JSON.parse(data.response); 
        this.menuItems = jsonResponse.menuItems;
      });

  }
  
  loginResult(response) {
      console.log(`App.loginResult() : ${response.success}`);
      this.isLoginVisible = false;
  }
}
