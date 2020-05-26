import { Routes } from "@angular/router";

import { BlankLayoutComponent } from "app/layouts/blank-layout/blank-layout.component";
import { FullLayoutComponent } from "app/layouts/full-layout/full-layout.component";
import { SimpleLayoutComponent } from "app/layouts/simple-layout/simple-layout.component";

export const routing: Routes = [
  { path: "", redirectTo: "pages/home", pathMatch: "full" },
  {
    path: "pages",
    component: FullLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: "app/pages/home/home.module#HomeModule",
      },
    ],
  },
  {
    path: "pages",
    component: FullLayoutComponent,
    children: [
      {
        path: "result",
        loadChildren:
          "app/pages/search-result/search-result.module#SearchResultModule",
      },
    ],
  },
  {
    path: "**",
    loadChildren: "app/pages/error/not-found/not-found.module#NotFoundModule",
  },
];
