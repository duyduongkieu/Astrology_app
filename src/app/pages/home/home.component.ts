import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

import { OwlOptions } from "ngx-owl-carousel-o";

import { NgxSmartModalService } from "ngx-smart-modal";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild("sliderContent") sliderElement: ElementRef;

  public timeLeft: number = 0;
  public interval1: any;
  public interval2: any;
  public interval3: any;
  public number1 = 0;
  public number2 = 0;
  public number3 = 0;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  constructor(private ngxSmartModalService: NgxSmartModalService) {}

  public countUpNumber1(endTime: number) {
    this.interval1 = setInterval(() => {
      if (this.number1 >= 0) {
        this.number1++;
        if (this.number1 === endTime) {
          clearInterval(this.interval1);
        }
      }
    }, 10);
  }

  public countUpNumber(endTime: number, interval, number) {
    interval = setInterval(() => {
      if (number >= 0) {
        number++;
        if (number === endTime) {
          clearInterval(interval);
        }
      }
    }, 10);
  }

  public countUpNumber2(endTime: number) {
    this.interval2 = setInterval(() => {
      if (this.number2 >= 0) {
        this.number2++;
        if (this.number2 === endTime) {
          clearInterval(this.interval2);
        }
      }
    }, 10);
  }

  public countUpNumber3(endTime: number) {
    this.interval3 = setInterval(() => {
      if (this.number3 >= 0) {
        this.number3++;
        if (this.number3 === endTime) {
          clearInterval(this.interval3);
        }
      }
    }, 100);
  }

  public onShowModal() {
    this.ngxSmartModalService.getModal("popupOne").open();
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.countUpNumber1(263);
    this.countUpNumber2(671);
    this.countUpNumber3(31);
  }
}
