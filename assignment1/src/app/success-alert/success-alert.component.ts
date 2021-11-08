import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<div class="alert-success">A sample success alert!</div>',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
