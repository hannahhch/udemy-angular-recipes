import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cheese', 1),
    new Ingredient('Tomatoes', 2),
    new Ingredient('Pizza Dough', 1),
    new Ingredient('Pepperoni', 3),
  ];
  constructor() { }

  ngOnInit() {
  }

}
