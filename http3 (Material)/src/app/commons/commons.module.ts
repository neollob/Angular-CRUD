import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';

@NgModule({
  declarations: [HomeComponent, NavBarComponent, NotFoundComponent, SideNavListComponent],
  imports: [
    CommonModule, RouterModule, MaterialModule, FlexLayoutModule
  ],
  exports: [HomeComponent, NavBarComponent, NotFoundComponent, SideNavListComponent]
})
export class CommonsModule { }
