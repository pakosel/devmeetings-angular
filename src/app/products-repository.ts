import {Injectable} from "@angular/core";
import {MyProdComponent} from './my-prod/my-prod.component';

@Injectable()
export class ProductsRepository {
  public getProducts (): Array<MyProdComponent> {
    return [
      new MyProdComponent(1, 'Prod 1: mazda', true),
      new MyProdComponent(2, 'Prod 2: Ford', false),
      new MyProdComponent(3, 'Product: Audi', true),
      new MyProdComponent(4, 'Combo: VW + AUDI', false),
      new MyProdComponent(5, 'Mercedes', true),
      new MyProdComponent(6, 'Car 11: BMW', false),
      new MyProdComponent(7, 'VW', false),
    ];
  }
}
