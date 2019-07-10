import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserAddComponent } from './users/user-add/user-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component : UsersListComponent},
  { path: 'users/:id', component : UserDetailComponent},
  { path: 'adduser', component : UserAddComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
