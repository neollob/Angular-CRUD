import { Component, OnInit } from '@angular/core';
import { MyServiceService, User } from 'src/app/shared/serviices/my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  public user: User = {
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
  constructor(private api: MyServiceService, private router: Router) { }
  public users: any = {};
  addUser() {
    console.log('adding');
    this.api.getUsers$().subscribe(arg => {
      this.users = arg;
      this.user.id = this.users.length;
      this.api.addUser$(this.user)
        .subscribe(
          res => {
            console.log(res);
            this.gotoUserDetails('/users', this.user.id);
          },
          err => { console.log(`Error occured`); }
        );
    });
  }
  public gotoUserDetails(url: string, id: number) {
    const myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
  ngOnInit() {
  }

}
