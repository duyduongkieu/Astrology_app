import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BlankLayoutComponent } from "./blank-layout/blank-layout.component";
import { FullLayoutComponent } from "./full-layout/full-layout.component";
import { HeaderComponent } from "./full-layout/header/header.component";
import { SimpleLayoutComponent } from "./simple-layout/simple-layout.component";

const components = [
  BlankLayoutComponent,
  SimpleLayoutComponent,
  FullLayoutComponent,
  HeaderComponent,
];

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [...components],
  exports: [...components],
})
export class LayoutModule {}
