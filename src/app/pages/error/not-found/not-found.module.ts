import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NotFoundComponent } from "./not-found.component";
import { routing } from "./not-found.routing";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, RouterModule.forChild(routing)],
})
export class NotFoundModule {}
