import { Component } from '@angular/core';

export interface LogRecord {
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public displayDetails = false;
  public log: LogRecord[] = [];

  public isHighlighted(index: number): boolean {
    return index >= 4;
  }

  public onDisplayDetailsClick(): void {
    this.displayDetails = !this.displayDetails;

    this.log.push({
      message: 'Display Details button was clicked.',
      timestamp: new Date()
    });
  }
}
