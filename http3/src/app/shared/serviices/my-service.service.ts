import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  initUser() {
    const user: User = {
      _id: '',
      id: -1,
      guid: '',
      isActive: undefined,
      balance: '',
      picture: '',
      age: -1,
      eyeColor: '',
      name: {
        first: '',
        last: ''
      },
      gender: '',
      company: '',
      email: '',
      phone: '',
      address: '',
      about: '',
      registered: '',
      latitude: 0,
      longitude: 0,
      greeting: ''
    };
    return user;
  }
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
