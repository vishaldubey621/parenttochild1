import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondapp';
  customer = [
    {
      name : "vishal",
      age : 24
    },
    {
      name : "kishan",
      age : 23
    },
    {
      name : "rohit",
      age : 25
    }
  ]
}
