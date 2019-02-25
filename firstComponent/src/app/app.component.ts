import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'firstComponent';
  name = "initial value";
  onInputChange(event : Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
