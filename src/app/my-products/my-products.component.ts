import { Component, OnInit } from '@angular/core';
import {MyProdComponent} from '../my-prod/my-prod.component';
import {FormControl} from '@angular/forms';
import {ProductsRepository} from '../products-repository';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  public lastInput: string = '';
  public sortID: 'thID' | 'thName';


  public myInput = new FormControl();

  private productsInt: Array<MyProdComponent>;
  public products: Array<MyProdComponent>;

  constructor(productsRepository: ProductsRepository) {
    this.productsInt = productsRepository.getProducts();
    this.products = this.productsInt;
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
