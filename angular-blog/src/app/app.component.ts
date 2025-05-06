import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, MenuTitleComponent, BigCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  

})
export class AppComponent {
  title = 'angular-blog';
}
