import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hw';
  valuer: string = '';
  log: boolean = false;
  reg: boolean = false;
  showHide: boolean = false;
  apartments: object[] = [];

  apartArr = [
    {id:1, location: 'Lviv',cost: 50000 },
    {id:2,  location: 'Lutsk',cost: 30000 },
    {id:3, location: 'Ternopil', cost: 35000},
  ]


  showRes(val) {
    console.log(val);
    this.valuer = val
  }

  logins() {
    this.log = !this.log;
    this.reg = false;

  }

  registration() {
    this.reg = !this.reg;
    this.log = false;
  }

  ShowAp() {
    this.apartments = this.apartArr;
  }



}



