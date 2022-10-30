import { Injectable } from '@angular/core';

import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Garlic', 1),
    new Ingredient('Lemons', 2),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsAdded.next(this.ingredients.slice());
  }
}
