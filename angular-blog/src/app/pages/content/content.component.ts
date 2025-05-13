import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/datafake';

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
  description:string="A SÉRIE"
  

  private id:string | null ="0"

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
  }

  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id == id)

    if(!result){
      
    }
  }
}
