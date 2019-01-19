import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devmeetings-angular';
  public products: Array<{id: number, name: string}> = [
    {id: 1, name: 'Prod 1'},
    {id: 2, name: 'Prod 2'},
    {id: 3, name: 'Prod 3'},
    {id: 4, name: 'Prod 4'},
    {id: 5, name: 'Prod 5'},
  ];
}
