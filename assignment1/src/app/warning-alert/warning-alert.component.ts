import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<div class="alert-warning">A sample warning alert!</div>',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
