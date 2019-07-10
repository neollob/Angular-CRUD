import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public users: any = [];
  public data: any;
   dataSource = new MatTableDataSource(this.users);

  displayedColumns: string[] = ['_id', 'id', 'firstName', 'lastName', 'eMail','age'];

  constructor(public api: ApiService) { }

  getUsers() {
    this.api.getUsers$().subscribe(arg => {
      this.users = arg;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  deleteUser(id: string) {
    this.api.deleteUser$(+id).subscribe(res => {
      this.data = res;
      this.getUsers();
    });
  }
  ngOnInit() {
    this.getUsers();
  }

}
