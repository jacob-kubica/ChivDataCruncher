import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.sass"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Pizza",
      "Italian Pizza",
      "https://storage.pizzapizza.ca/phx2/ppl_images/category/en/2x/pickup_speciala.png"
    ),
    new Recipe(
      "Pasta",
      "Italian Pasta",
      "https://s23209.pcdn.co/wp-content/uploads/2019/05/Instant-Pot-Ground-Beef-and-PastaIMG_9819.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
