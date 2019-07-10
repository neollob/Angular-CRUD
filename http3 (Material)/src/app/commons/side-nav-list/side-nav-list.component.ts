import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
