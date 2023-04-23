import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http.put('https://recipe-bevy-default-rtdb.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  getRecipes() {
    return this.http.get<Recipe[]>(
      'https://recipe-bevy-default-rtdb.firebaseio.com/recipes.json'
    )
    .pipe(map(recipes => 
        recipes ? recipes.map(recipe => 
          ({ ingredients: [], ...recipe })) : []
      ),
      tap(recipes => this.recipeService.setRecipes(recipes))
    );
  }
}
