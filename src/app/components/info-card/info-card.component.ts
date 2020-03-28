import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-info-card",
  templateUrl: "./info-card.component.html",
  styleUrls: ["./info-card.component.css"]
})
export class InfoCardComponent implements OnInit {
  @Input() pokemon;
  @Input() pokeId;
  imageUrl;

  constructor() {}

  ngOnInit(): void {
    this.imageUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      (parseInt(this.pokeId) + 1) +
      ".png";
  }
}
