import { Component, 
          OnChanges,
          OnInit, 
          DoCheck, 
          AfterContentInit, 
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy,
          SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'firstComponent';
  name = "initial value";

  constructor() {
    console.log('constructor is called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges is called '+ changes);
  }

  ngOnInit() {
    console.log('onInit is called');
  }

  ngDoCheck() {
    console.log('doCheck is called ');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit is called');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked is called');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit is called');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked is called');
  }

  ngOnDestroy() {
    console.log('OnDestroy is called');
  }

  onInputChange(event : Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
