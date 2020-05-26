import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

import { HttpService } from "app/services/http.service";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit, AfterViewInit {
  @ViewChild("nextTab") nextTabElement: ElementRef;

  public meaning = "";
  public define = "";
  public name = "";
  public birthday = "";
  public hours = "";
  public address = "";
  public pyramid = [];
  public pyramidRow1 = [];
  public pyramidRow2 = [];
  public pyramidRow3 = [];
  public pyramidRow4 = [];

  public panelOpenState = false;
  public heightElement: any;
  constructor(private httpService: HttpService) {}
  // ...
  public getData() {
    let resquest = {
      name: localStorage.getItem("name"),
      birthday: localStorage.getItem("birthday"),
    };
    return this.httpService.getDiscoverLifeInfor(resquest).subscribe((res) => {
      if (res) {
        this.meaning = res.data.YNGHIA;
        this.define = res.data.DINHNGHIA;
        this.pyramid = res.data.DRAW;
        this.pyramidRow1 = this.pyramid[0];
        this.pyramidRow2 = this.pyramid[1];
        this.pyramidRow3 = this.pyramid[2];
        this.pyramidRow4 = this.pyramid[3];
        this.name = localStorage.getItem("name");
        this.birthday = localStorage.getItem("birthday");
        this.address = localStorage.getItem("address");
        this.hours = localStorage.getItem("hours");
        console.log(this.pyramid);
        console.log(this.pyramidRow2);
      }
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.heightElement = this.nextTabElement.nativeElement.offsetHeight + 30;
    }, 0);
  }
  ngOnInit() {
    this.getData();
  }
}
