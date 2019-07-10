import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatButtonModule, MatTabsModule,
  MatListModule, MatInputModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
