import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
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
}
