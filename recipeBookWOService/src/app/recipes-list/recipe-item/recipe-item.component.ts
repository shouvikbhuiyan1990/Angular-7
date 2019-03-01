import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;
  @Output() recipeItemClick =  new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  recipeItemClicked(recipe) {
    this.recipeItemClick.emit(recipe);
  }
  
}
