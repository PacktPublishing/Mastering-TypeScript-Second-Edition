import { Component } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  { name = 'Angular'; }
