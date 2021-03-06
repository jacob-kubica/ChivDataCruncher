import { Component } from "@angular/core";
import { Post } from "./posts/posts.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  storedPosts: Post[] = [];

  onPostAdd(post) {
    this.storedPosts.push(post);
  }
}
