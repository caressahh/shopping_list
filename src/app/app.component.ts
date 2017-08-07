import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List';
  shoppingList = [
  {name: "white wine", price: 1.39},
  {name: "red wine", price: 12.39},
  {name: "blue wine", price: 6.39}
  ]
}
