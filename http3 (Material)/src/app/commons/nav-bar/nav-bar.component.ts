import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
