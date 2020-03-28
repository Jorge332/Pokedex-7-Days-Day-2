import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/services/rest-api.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  arr = [];

  constructor(private restApi: RestApiService) {}

  ngOnInit(): void {
    this.restApi.getPokemons().subscribe(val => {
      this.arr = val.results;
    });
  }
}
