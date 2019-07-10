import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from 'src/app/shared/interfaces/user.model';

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

  displayedColumns: string[] = ['_id', 'id', 'name.first', 'name.last', 'email', 'age'];

  constructor(public api: ApiService) { }

  getUsers() {
    this.api.getUsers$().subscribe(arg => {
      this.users = arg;
      this.matTable();
    });
  }
  deleteUser(id: string) {
    this.api.deleteUser$(+id).subscribe(res => {
      this.data = res;
      this.getUsers();
    });
  }
  matTable() {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item: User, property) => {
      switch (property) {
        case 'name.first': return item.name.first;
        case 'name.last': return item.name.last;
        default: return item[property];
      }
    };
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.getUsers();
  }

}
