import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-title',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent {
  @Input()
  Id:string="0"
}
