import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/serviices/my-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: any;
  constructor(public api: MyServiceService) { }
  getUsers() {
    this.api.getUsers$().subscribe(arg => this.users = arg);
  }
  ngOnInit() {
    this.getUsers();
  }

}
