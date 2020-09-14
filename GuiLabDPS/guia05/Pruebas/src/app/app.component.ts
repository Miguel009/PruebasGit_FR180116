import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <div style="text-align: center" class="content">
 <h1>
 welcome to {{title}}!
</h1>
<span style = "display: block">{{title}} app is running!</span>
  <img width="300" alt="Angular logo" src="data:image/svg+">
  <h2>Here are some links to help you start : </h2>
  <ul>
  <li>
  <h2>wooo</h2>
  </li>
  <juego-dado></juego-dado>
  `,
})
export class AppComponent {
  title = 'Pruebas';
}
