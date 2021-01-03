import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <mat-slider min="1" max="100" step="1" value="1"></mat-slider>
  <button >Dude</button>
  <button mat-button>
    <mat-icon>home</mat-icon>  
    Sweet
  </button>
  <br>
  <mat-checkbox>Check me!</mat-checkbox>
    `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
