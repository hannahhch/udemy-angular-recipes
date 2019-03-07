import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe = [
    new Recipe(
      'Avocado Toast',
      'Subtitle',
      'https://media.self.com/photos/5a29b90fe1ef6d3e6b87ff67/4:3/w_728,c_limit/SNACKS_07_SIMPLE_AVOCADO_TOAST_037.jpg',
    ),
    new Recipe(
      'Poke Bowls',
      'Subtitle',
      'https://www.jessicagavin.com/wp-content/uploads/2016/06/sockeye-salmon-poke-spicy-soy-sauce_1200.jpg',
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
