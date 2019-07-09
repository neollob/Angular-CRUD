import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Users {
  _id: string;
  index: number;
  'guid': string;
  'isActive': boolean;
  'balance': string;
  'picture': string;
  'age': number;
  'eyeColor': string;
  'name': {
    'first': string,
    'last': string
  };
  'gender': string;
  'company': string;
  'email': string;
  'phone': string;
  'address': string;
  'about': string;
  'registered': string;
  'latitude': number;
  'longitude': number;
  'greeting': string;

}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getUsers$() {
    const arr = this.http.get<Users>('http://localhost:3000/users');
    return arr;
  }
  getUser$(id: string) {
    const arr = this.http.get<Users>(`http://localhost:3000/users/${id}`);
    return arr;
  }
}
