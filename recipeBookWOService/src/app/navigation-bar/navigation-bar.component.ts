import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less']
})
export class NavigationBarComponent implements OnInit {
  @Output() navigationClick = new EventEmitter<{type: String}>();

  currentNav: String = 'recipes';

  constructor() { }

  ngOnInit() {
  }

  navigationClicked(type) {
    this.currentNav = type;

    this.navigationClick.emit({
      type
    });
  }

}
