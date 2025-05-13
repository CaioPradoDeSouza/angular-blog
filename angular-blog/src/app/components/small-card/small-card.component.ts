import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  Id:string="0"
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string=""
  @Input()
  instaPiloto:string=""
}
