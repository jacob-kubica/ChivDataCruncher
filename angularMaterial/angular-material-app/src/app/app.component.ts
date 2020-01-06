import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-material-app";
  serverCreationStatus = "No server weas created!";

  constructor() {}

  onCreateServer() {}
}
