import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  Event,
  NavigationEnd,
  ActivatedRoute,
  Data,
  ParamMap
} from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppRoutingService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public getRouteData(): any {
    const root = this.router.routerState.snapshot.root;
    return this.lastChild(root).data;
  }

  public getActivatedRouteData(activatedRoute: ActivatedRoute): Observable<Data> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data));
  }

  // recursive get route data
  private lastChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    if (route.firstChild) {
      return this.lastChild(route.firstChild);
    } else {
      return route;
    }
  }

  public getNavigationEnd(): Observable<Event> {
    return this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }

  // TODO: wont work
  public subscribeQueryParamValue(paramName: string, callback: (...args) => void): Subscription {
    return this.route.paramMap.subscribe((value: ParamMap) => {
      const paramValue = value.get(paramName);
      if (paramValue) {
        callback(paramValue);
      }
    });
  }

  public getQueryParamValueOne(paramName: string): string {
    return this.route.snapshot.paramMap.get(paramName);
  }
}
