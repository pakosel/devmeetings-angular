import { Component, OnInit } from '@angular/core';
import {MyProdComponent} from '../my-prod/my-prod.component';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  public products: Array<MyProdComponent> = [
    new MyProdComponent(1, 'Prod 1', true),
    new MyProdComponent(2, 'Prod 2', false),
    new MyProdComponent(3, 'Prod 3', true),
    new MyProdComponent(4, 'Prod 4', false),
    new MyProdComponent(5, 'Prod 5', true),
    new MyProdComponent(6, 'Prod 6', false),
  ];

  constructor() { }

  ngOnInit() {
  }

}
