import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title:String = 'recipeBook';
  navItem: String = 'recipes';

  navigationClick(event) {
    this.navItem = event.type;
  }
}
