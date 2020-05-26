import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ToastrService } from "ngx-toastr";

import { HttpService } from "app/services/http.service";
import { REGEX_PHONE_NUMBER, REGEX_EMAIL } from "app/app.constants";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  public fContact: FormGroup;
  public submitted = false;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private toastrService: ToastrService
  ) {}

  public onSubmit() {
    this.submitted = true;

    if (this.fContact.valid) {
      console.log(this.fContact.value);
      let response = {
        name: this.fContact.value.name,
        phone: this.fContact.value.phone,
        email: this.fContact.value.email,
        content: this.fContact.value.content,
      };
      this.httpService.sendContactInfor(response).subscribe((res) => {
        if (res.status_code === 200) {
          this.toastrService.success("Success", "");
        } else {
          this.toastrService.error("Error", "");
        }
      });
    }
  }

  ngOnInit() {
    this.fContact = this.fb.group({
      name: this.fb.control("", [Validators.required]),
      email: this.fb.control("", [
        Validators.required,
        Validators.pattern(REGEX_EMAIL),
      ]),
      phone: this.fb.control("", [
        Validators.required,
        Validators.pattern(REGEX_PHONE_NUMBER),
      ]),
      content: this.fb.control("", []),
    });
  }
}
