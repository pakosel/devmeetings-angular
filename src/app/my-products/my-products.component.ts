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

  public myInput = new FormControl();

  public products: Array<MyProdComponent> = [
    new MyProdComponent(1, 'Prod 1: mazda', true),
    new MyProdComponent(2, 'Prod 2: Ford', false),
    new MyProdComponent(3, 'Product: Audi', true),
    new MyProdComponent(4, 'Combo: VW + AUDI', false),
    new MyProdComponent(5, 'Mercedes', true),
    new MyProdComponent(6, 'Car 11: BMW', false),
    new MyProdComponent(7, 'VW', false),
  ];

  constructor() {
    //this.myInput.valueChanges.subscribe(value => this.values.push(value));
    this.myInput.valueChanges.subscribe(value => this.lastInput = value);
  }

  ngOnInit() {
  }

}
