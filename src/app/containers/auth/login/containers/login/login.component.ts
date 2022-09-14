import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  loginUser(event: FormGroup) {
    console.log("🚀 ~ event", event);
  }
}