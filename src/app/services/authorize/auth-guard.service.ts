import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "./authentication.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAccepted = this.authService.acceptRedirectPage();
    if (isAccepted === true) {
      return this.authService.acceptRedirectPage();
    }
    this.router.navigate(["/"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
