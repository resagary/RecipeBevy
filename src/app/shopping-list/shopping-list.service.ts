import { Injectable } from '@angular/core';

import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Garlic', 1),
    new Ingredient('Lemons', 2),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onChangedShoppingList();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onChangedShoppingList();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.onChangedShoppingList();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.onChangedShoppingList();
  }

  onChangedShoppingList() {
    this.ingredientsAdded.next(this.ingredients.slice());
  }
}
