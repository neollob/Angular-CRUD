import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  public user: User = this.api.initUser();
  public userData: User = this.api.initUser();
  constructor(private api: ApiService, private router: Router) { }
  public users: any = {};
  public addUser() {
    console.log('adding');
    this.api.getUsers$().subscribe(arg => this.addWithId(arg) );
  }
  public addWithId(arg){
    this.users = arg;
    this.userData.id = this.users.length;
    this.user = Object.assign({}, this.userData);
    this.api.addUser$(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.gotoUserDetails('/users', this.user.id);
        },
        err => { console.log(`Error occured`); }
      );
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
