import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserDetailComponent, UsersListComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [UserDetailComponent, UsersListComponent]
})
export class UsersModule { }
