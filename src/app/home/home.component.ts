import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  getLoginDetails(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',

      })
    };
    const url = "http://localhost:8080/gbmultra/user/login";
    var request =
    {
      "username": "SRIHARI1",
      "password": "Hq3EZAhbFjBA+8U7LEwA1Q==",
      "userDomain": "STAND_ALONE"
    }
    this.http.post(url,request,httpOptions).subscribe({
      next: (profile) => {
        console.log(profile);
      }
    });
  }
}
