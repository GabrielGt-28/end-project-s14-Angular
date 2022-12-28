import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesApiService {
  _url = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getUrl() {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.get(this._url, { headers: header });
  }
}
