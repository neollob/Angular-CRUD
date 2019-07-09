import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, NavBarComponent, NotFoundComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HomeComponent, NavBarComponent, NotFoundComponent]
})
export class CommonsModule { }
