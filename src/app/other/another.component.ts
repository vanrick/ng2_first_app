import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  template: `
  <p>
  another Works!
  </p>
    <article>
    <ng-content></ng-content>
    </article>
  `,
  styles: [`p {
    color: purple;
  }
  article {
    border: 1px solid black;
  }`]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
