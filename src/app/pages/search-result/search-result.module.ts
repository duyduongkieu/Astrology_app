import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatTabsModule } from "@angular/material/tabs";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatExpansionModule } from "@angular/material/expansion";

import { SearchResultComponent } from "./search-result.component";
import { routing } from "./search-result.routing";
import { SearchResultFooterComponent } from './search-result-footer/search-result-footer.component';

@NgModule({
  declarations: [SearchResultComponent, SearchResultFooterComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    NgbModule,
    MatExpansionModule,
    RouterModule.forChild(routing),
  ],
})
export class SearchResultModule {}
