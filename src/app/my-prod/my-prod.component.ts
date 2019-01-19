import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-prod',
  templateUrl: './my-prod.component.html',
  styleUrls: ['./my-prod.component.scss']
})
export class MyProdComponent implements OnInit {

  id: number;
  name: string;
  isPromoted: boolean;

  constructor(id: number, name: string, isPromoted: boolean) {
    this.id = id;
    this.name = name;
    this.isPromoted = isPromoted;
  }

  ngOnInit() {
  }

}
