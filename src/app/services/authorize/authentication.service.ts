import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, Observable } from "rxjs";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { catchError, mapTo, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {}

  acceptRedirectPage() {
    const acceptRedirect = JSON.parse(localStorage.getItem("acceptRedirect"));
    if (acceptRedirect) {
      return acceptRedirect;
    }
  }
}
