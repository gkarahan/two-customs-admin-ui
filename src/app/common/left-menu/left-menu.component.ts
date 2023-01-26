import { Component } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {

  items = [
    {label: 'BPM', routerLink: '/bpm'},
    {label: 'Form', routerLink: '/form'},
  ];
}
