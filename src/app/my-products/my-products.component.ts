import { Component, OnInit } from '@angular/core';
import {MyProdComponent} from '../my-prod/my-prod.component';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  //public values: Array<string> = [];
  public lastInput: string = '';
  public sortID: 'thID' | 'thName';


  public myInput = new FormControl();

  private productsInt: Array<MyProdComponent> = [
    new MyProdComponent(1, 'Prod 1: mazda', true),
    new MyProdComponent(2, 'Prod 2: Ford', false),
    new MyProdComponent(3, 'Product: Audi', true),
    new MyProdComponent(4, 'Combo: VW + AUDI', false),
    new MyProdComponent(5, 'Mercedes', true),
    new MyProdComponent(6, 'Car 11: BMW', false),
    new MyProdComponent(7, 'VW', false),
  ];
  public products: Array<MyProdComponent> = this.productsInt;

  constructor() {
    //this.myInput.valueChanges.subscribe(value => this.values.push(value));
    this.myInput.valueChanges.subscribe(value => this.lastInput = value);
  }

  ngOnInit() {
  }

  public onClick (button) {
      this.sortID = button.id;
      this.sortList();
  }

  private sortList() {
    if (this.sortID === 'thID') {
      this.products = this.productsInt.sort(function (a, b) {
        return b.id - a.id;
      });
    }
    if (this.sortID === 'thName') {
      this.products = this.productsInt.sort(function (a, b) {
        return a.name.length - b.name.length;
      });
    }
  }
}
