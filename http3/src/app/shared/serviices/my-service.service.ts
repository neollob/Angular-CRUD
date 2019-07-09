import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  _id: string;
  id: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: {
    first: string,
    last: string
  };
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: number;
  longitude: number;
  greeting: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getUsers$() {
    const users = this.http.get<User>('http://localhost:3000/users');
    return users;
  }
  getUser$(id: string) {
    const user = this.http.get<User>(`http://localhost:3000/users/${id}`);
    return user;
  }
  addUser$(user: User) {
    return this.http.post<User>('http://localhost:3000/users', user);
  }
}
