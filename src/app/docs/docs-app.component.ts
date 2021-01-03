import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styles: [
  ]
})
export class DocsAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
