import { Component, EventEmitter, Output } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {

  public grupos: Grupo[] = [];
  @Output() grupoClicado = new EventEmitter();

  private grupoTotal: Grupo = new Grupo(0, "TODOS");

  constructor(private http: HttpService) {

    this.http.getGrupos().subscribe(
      (data) => {
        console.log(data)
        this.grupos = data;
        this.grupos.push(this.grupoTotal)
      }
    )    
  }
  
}
