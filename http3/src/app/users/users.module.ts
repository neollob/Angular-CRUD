import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [UserDetailComponent, UsersListComponent, UserAddComponent],
  imports: [
    CommonModule, RouterModule, FormsModule
  ],
  exports: [UserDetailComponent, UsersListComponent, UserAddComponent]
})
export class UsersModule { }
