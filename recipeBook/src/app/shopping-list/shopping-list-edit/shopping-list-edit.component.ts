import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.less']
})
export class ShoppingListEditComponent implements OnInit {
  itemName= "";
  itemAmount= 0;

  @Output() onIngrediantAddedProp =  new EventEmitter<{amount:Number, itemName:String}>();

  constructor() { }

  ngOnInit() {
  }

  onIngrediantAdded() {
    this.onIngrediantAddedProp.emit({
      amount: this.itemAmount,
      itemName: this.itemName
    });
  }
  
  onIngrediantDeleted() {
    
  }

  onIngrediantcleared() {
    
  }

}
