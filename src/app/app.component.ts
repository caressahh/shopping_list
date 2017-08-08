import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List';
  newWine = { name:'', price:0, amount:0 };
  shoppingList = [
  {name: "white wine", price: 1.39, amount:1},
  {name: "red wine", price: 12.39, amount:1},
  {name: "blue wine", price: 6.39, amount:1}
  ];

  totalPrice = 0;

  calculateTotal(){
    this.shoppingList.forEach(wine=>{
      this.totalPrice += (wine.price * wine.amount);
    });
  }

  addItem(){
    this.shoppingList.push(this.newWine)
    this.newWine = {name:'', price:0, amount:0}
    this.calculateTotal();
  }

  ngAfterViewInit() {
    this.calculateTotal();
  }
}
