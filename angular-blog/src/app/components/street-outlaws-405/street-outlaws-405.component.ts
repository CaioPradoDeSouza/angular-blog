import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-street-outlaws-405',
  imports: [],
  templateUrl: './street-outlaws-405.component.html',
  styleUrl: './street-outlaws-405.component.css'
})
export class StreetOutlaws405Component {

  @Input()
  photoCover:string="./assets/the-405.webp"
  @Input()
  pageTitle:string="405 STREET OUTLAWS"
  @Input()
  h2Title:string="A SÉRIE"
  @Input()
  h2Title2:string="OKLAHOMA"
  @Input()
  primeiroTexto:string="Street Outlaws uma serie do Discovery Turbo em que os corredores de rua mais           rapidos dos Estados Unidos se enfrentam em corridas insanas e perigosas, com carros super modificados, que odem custar até a própria vida,mas valendo muito dinheiro !"
  @Input()
  segundoTexto:string="Oklahoma uma cidade dos Estados Unidos que tem o 405 como seu simbolo aonde estão os corredores de rua mais rápidos dos País."

  constructor(){
    
  }

  
}