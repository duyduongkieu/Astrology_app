import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  NgZone,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { ApiService, Maps } from "app/services/api.google.service";
import { AuthService } from "app/services/authorize/authentication.service";
import { HttpService } from "app/services/http.service";
import { REGEX_PHONE_NUMBER, REGEX_EMAIL } from "app/app.constants";
@Component({
  selector: "app-information-form",
  templateUrl: "./information-form.component.html",
  styleUrls: ["./information-form.component.scss"],
})
export class InformationFormComponent implements OnInit {
  @ViewChild("search") public searchElementRef: ElementRef;
  @ViewChild("map") public mapElementRef: ElementRef;
  @ViewChild("timer") public timerElementRef: ElementRef;

  public place: google.maps.places.PlaceResult;
  public map: google.maps.Map;
  public entries = [];

  public fContact: FormGroup;
  public submitted = false;
  public birthday = "";
  public type = "text";

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  public initAutocomplete(maps: Maps) {
    let autocomplete = new maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        this.onPlaceChange(autocomplete.getPlace());
      });
    });
  }

  public initMap(maps: Maps) {
    this.map = new maps.Map(this.mapElementRef.nativeElement, {
      zoom: 7,
    });
    this.map.addListener("click", (event) => {});
  }

  public onPlaceChange(place: google.maps.places.PlaceResult) {
    const marker = new google.maps.Marker({
      position: place.geometry.location,
      animation: google.maps.Animation.DROP,
      map: this.map,
    });

    const rectangle = new google.maps.Rectangle({
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillOpacity: 0.35,
      map: this.map,
      bounds: place.geometry.viewport,
    });

    const expandedRectangle = new google.maps.Rectangle({
      strokeOpacity: 0.8,
      strokeWeight: 0.5,
      fillOpacity: 0.2,
      map: this.map,
    });

    const ellipse = new google.maps.Polygon({
      strokeOpacity: 1,
      strokeWeight: 1,
      fillOpacity: 0.3,
    });
    ellipse.setMap(this.map);

    this.entries.unshift({
      place,
      marker,
      rectangle,
      expandedRectangle,
      ellipse,
      location,
    });
  }

  public onSubmit() {
    this.submitted = true;

    if (this.fContact.valid) {
      let date = this.fContact.value.birthday;
      let dateFormat = new Date(date);
      let year = dateFormat.getFullYear();
      let month = (1 + dateFormat.getMonth()).toString().padStart(2, "0");
      let day = dateFormat.getDate().toString().padStart(2, "0");
      this.birthday = day + "/" + month + "/" + year;
      this.fContact.value.address = this.searchElementRef.nativeElement.value;
      this.fContact.value.hours = this.timerElementRef.nativeElement.value;
      localStorage.setItem("name", this.fContact.value.fullName);
      localStorage.setItem("birthday", this.birthday);
      localStorage.setItem("address", this.fContact.value.address);
      localStorage.setItem("hours", this.timerElementRef.nativeElement.value);
      localStorage.setItem("acceptRedirect", "true");
      this.router.navigate(["/pages/result"]);
    }
  }

  public changeType() {
    if (this.type === "text") {
      this.type = "date";
    } else {
      this.type = "text";
    }
  }

  ngOnInit() {
    this.fContact = this.fb.group({
      fullName: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [
        Validators.required,
        Validators.pattern(REGEX_EMAIL),
      ]),
      phone: this.fb.control("", [
        Validators.required,
        Validators.pattern(REGEX_PHONE_NUMBER),
      ]),
      gender: this.fb.control("1", [Validators.required]),
      address: this.fb.control("", [Validators.required]),
      birthday: this.fb.control("", [Validators.required]),
      hours: this.fb.control("", []),
    });

    this.apiService.api.then((maps) => {
      this.initAutocomplete(maps);
    });
  }
}
