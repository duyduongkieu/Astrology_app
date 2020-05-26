import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs";

import { AppRoutingService } from "app/services/routing/app-routing.service";
import { LocalizeService } from "./services/localization/localize.service";
import { EventService } from "./services/event/event.service";
import { ChangePageEvent } from "./models/event/event.model";

import { EVENT_CHANGE_PAGE } from "app/app.constants";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  constructor(
    private titleService: Title,
    private appRoutingService: AppRoutingService,
    private activatedRoute: ActivatedRoute,
    private localizeService: LocalizeService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    // get the current route data from a parent component then set the page title
    this.subscriptions.push(
      this.appRoutingService
        .getActivatedRouteData(this.activatedRoute)
        .subscribe((data) => {
          if (data.pageTitle) {
            this.titleService.setTitle(
              this.localizeService.instant(data.pageTitle)
            );
            this.eventService.broadcast(
              new ChangePageEvent({
                name: EVENT_CHANGE_PAGE,
                title: data.pageTitle,
              })
            );
          }
          if (data.pageTitle !== "Result") {
            localStorage.clear();
          }
        })
    );
  }
}
