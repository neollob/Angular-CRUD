import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/interfaces/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  identifier: any;
  public user: User = this.api.initUser();
  constructor(public api: ApiService, public route: ActivatedRoute) { }

  getUser() {
    this.identifier = this.route.snapshot.params.id;
    this.api.getUser$(this.identifier).subscribe(us => this.user = us);
  }
  ngOnInit() {
    this.getUser();
  }

}
