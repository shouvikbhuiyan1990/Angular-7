import { Component, OnInit } from '@angular/core';

import {Ingrediants} from '../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediants[] = [
    new Ingrediants(2, 'kola'),
    new Ingrediants(2, 'chanachur')
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngrediantAdded(ingredient: Ingrediants) {
    this.ingrediants.push(ingredient);
  }

}
