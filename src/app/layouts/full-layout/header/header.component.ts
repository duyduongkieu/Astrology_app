import { Component, OnInit } from "@angular/core";
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from "@angular/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("menuToggle", [
      transition(":enter", [
        style({ transform: "translateX(-100%)", opacity: 0 }),
        animate(
          "300ms ease-in",
          style({ transform: "translateX(0%)", opacity: 1 })
        ),
      ]),

      transition(":leave", [
        style({ transform: "translateX(0%)", opacity: 1 }),
        animate(
          "300ms ease-in",
          style({ transform: "translateX(100%)", opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  public show: boolean = false;
  constructor() {}

  toggleMenuMobile() {
    this.show = !this.show;
  }
  ngOnInit() {}
}
