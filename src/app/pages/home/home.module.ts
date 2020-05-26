import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { SlickCarouselModule } from "ngx-slick-carousel";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgxSmartModalModule, NgxSmartModalService } from "ngx-smart-modal";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, DateAdapter } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

import { HomeComponent } from "./home.component";
import { HttpService } from "app/services/http.service";
import { routing } from "./home.routing";
import { InformationFormComponent } from "./information-form/information-form.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { DateFormat } from "app/shared/data-picker/date-format";

@NgModule({
  declarations: [HomeComponent, InformationFormComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule,
    CarouselModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    NgxSmartModalModule.forRoot(),
    RouterModule.forChild(routing),
  ],
  providers: [
    HttpService,
    NgxSmartModalService,
    { provide: DateAdapter, useClass: DateFormat },
  ],
})
export class HomeModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale("en-in"); // DD/MM/YYYY
  }
}
