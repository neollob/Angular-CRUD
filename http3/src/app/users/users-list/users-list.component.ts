import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: any;
  public data: any;
  constructor(public api: ApiService) { }
  getUsers() {
    this.api.getUsers$().subscribe(arg => this.users = arg);
  }
  deleteUser(id: string) {
    this.api.deleteUser$(+id).subscribe(res => {
      this.data = res;
      this.getUsers();
    })
  }
  ngOnInit() {
    this.getUsers();
  }

}
