import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StreetOutlaws405Component } from "../../components/street-outlaws-405/street-outlaws-405.component";

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent, MenuBarComponent, RouterLink, RouterOutlet, StreetOutlaws405Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
