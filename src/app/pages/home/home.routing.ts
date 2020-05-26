import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const routing: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      pageTitle: "Home",
    },
  },
];
