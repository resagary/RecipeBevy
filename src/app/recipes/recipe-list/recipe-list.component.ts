import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Grilled Chicken', 'grilled chiken entree', 'https://thumbs.dreamstime.com/b/healthy-recipe-grilled-chicken-green-vegetable-tomatoes-dark-nonstick-pan-placed-metalic-grid-dark-healthy-178987383.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
