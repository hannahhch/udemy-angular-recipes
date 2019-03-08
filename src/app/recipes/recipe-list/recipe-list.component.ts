import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      '',
      'https://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png',
    ),
    new Recipe(
      'Pizza',
      'This is just a test',
      'https://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png',
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
