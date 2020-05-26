import { Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found.component";

export const routing: Routes = [
  {
    path: "",
    component: NotFoundComponent,
    data: {
      pageTitle: "404 page not found",
    },
  },
];
