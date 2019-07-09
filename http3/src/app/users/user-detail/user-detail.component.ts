import { Component, OnInit } from '@angular/core';
import { MyServiceService, User } from 'src/app/shared/serviices/my-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  identifier: any;
  public user: User = {
    _id: '',
    index: -1,
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
  constructor(public api: MyServiceService, public route: ActivatedRoute) { }

  getUser() {
    this.identifier = this.route.snapshot.params.id;
    this.api.getUser$(this.identifier).subscribe(us => this.user = us);
  }
  ngOnInit() {
    this.getUser();
  }

}
