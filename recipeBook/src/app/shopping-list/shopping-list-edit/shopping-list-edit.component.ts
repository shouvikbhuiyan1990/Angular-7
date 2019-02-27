import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.less']
})
export class ShoppingListEditComponent implements OnInit {
  itemName= "";
  itemAmount= 0;

  @Output() onIngrediantAddedProp =  new EventEmitter<{name:String, amount:Number}>();

  constructor() { }

  ngOnInit() {
  }

  onIngrediantAdded() {
    this.onIngrediantAddedProp.emit({
      name: this.itemName,
      amount: this.itemAmount
    });
  }
  
  onIngrediantDeleted() {
    
  }

  onIngrediantcleared() {
    
  }

}
