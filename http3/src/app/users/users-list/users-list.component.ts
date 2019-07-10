import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/shared/serviices/my-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users: any;
  public data: any;
  constructor(public api: MyServiceService) { }
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
