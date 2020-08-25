import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      Hello, {{user.name}}!
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit(): void {
    // user
  }

}
