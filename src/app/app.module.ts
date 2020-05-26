import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { TranslateModule } from "@ngx-translate/core";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { routing } from "./app.routing";
import { LayoutModule } from "app/layouts/layout.module";
import { LocalizeService } from "app/services/localization/localize.service";
import { ApiService } from "app/services/api.google.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    CarouselModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routing, {}),
    TranslateModule.forRoot({}),
  ],
  providers: [LocalizeService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
