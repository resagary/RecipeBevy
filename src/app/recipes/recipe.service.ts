import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Grilled Chicken', 
      'grilled chiken entree', 
      'https://thumbs.dreamstime.com/b/healthy-recipe-grilled-chicken-green-vegetable-tomatoes-dark-nonstick-pan-placed-metalic-grid-dark-healthy-178987383.jpg',
      [
        new Ingredient('Chicken Breasts', 4),
        new Ingredient('Green Beans', 1),
        new Ingredient('Tomatoes', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
