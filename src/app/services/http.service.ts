import { Observable, of, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Infor } from "app/models/user-infor/user-infor.model";

const dataUrlThanSo = "/api/ThanSo";
const dataUrlContactInfor = "/api/Contacts";

const token = "token:LDy3jn3Qslm149nLfKr2";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Request-With, Content-Type, Accept",
    "Access-Control-Allow-Method": "GET",
    Authorization: token,
  }),
};
@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public acceptRedirectPage(data: any) {
    return data;
  }

  getDiscoverLifeInfor(data: {
    name: string;
    birthday: string;
  }): Observable<any> {
    return this.http.get<any>(
      `${dataUrlThanSo}?name=${data.name}&birthday=${data.birthday}`,
      httpOptions
    );
  }

  sendContactInfor(data: {
    name: string;
    email: string;
    phone: string;
    content: string;
  }): Observable<any> {
    return this.http.post<any>(`${dataUrlContactInfor}`, data, httpOptions);
  }
}
