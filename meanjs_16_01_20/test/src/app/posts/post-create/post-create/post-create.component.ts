import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { Post } from "../../posts.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";

  @Output() postCreated = new EventEmitter<Post>();

  /*  */
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }

  constructor() {}

  ngOnInit() {}
}
