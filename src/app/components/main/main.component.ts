import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  arr = [];

  constructor() {
    for (let index = 0; index < 50; index++) {
      this.arr.push(index);
    }
  }

  ngOnInit(): void {}
}
