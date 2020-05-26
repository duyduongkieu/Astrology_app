import { Routes } from "@angular/router";
import { SearchResultComponent } from "./search-result.component";
import { AuthGuard } from "app/services/authorize/auth-guard.service";

export const routing: Routes = [
  {
    path: "",
    component: SearchResultComponent,
    data: {
      pageTitle: "Result",
    },
    canActivate: [AuthGuard],
  },
];
