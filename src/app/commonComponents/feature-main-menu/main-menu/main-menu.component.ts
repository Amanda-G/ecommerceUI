import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  title = 'materialApp';
  ripple = true;
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;
  constructor() { }

  ngOnInit(): void {
  }

}
