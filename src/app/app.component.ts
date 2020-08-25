import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello, {{user.name}}!
    <div [class]="myclass" [style.color]="mycolor">
      sometext
    </div>
    <button (click)="changeColor('yellow')">click me</button>
    <input (input)="changeColor($event.target.value)"
           (keydown.control.shift.enter)="changeColor('black')">


     <app-child [user]="user"></app-child>      
  `,
  styles: [`
    .red {
      color: red;
    }
  `]
})
export class AppComponent {
  title = 'myapp';
  user = {
    name: 'John'
  }
  myclass = 'red'
  mycolor = 'green';

  changeColor(color) {
    this.mycolor = color;
  }
}
