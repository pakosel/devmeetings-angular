import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devmeetings-angular';
  public products: Array<{id: number, name: string, isPromoted: boolean}> = [
    {id: 1, name: 'Prod 1', isPromoted: true},
    {id: 2, name: 'Prod 2', isPromoted: false},
    {id: 3, name: 'Prod 3', isPromoted: true},
    {id: 4, name: 'Prod 4', isPromoted: false},
    {id: 5, name: 'Prod 5', isPromoted: true},
  ];
}
