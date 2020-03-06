import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Produtos } from 'src/app/models/Produtos';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  public produtos: Produtos[] = [];
  public produtosListados: Produtos[] = [];

  constructor(private http: HttpService) {
    this.http.getProdutos().subscribe(
      (data) => {
        this.produtos = data;
        this.produtosListados = data;
      }
    )
  }

  listarDoGrupo(codDoGrupo: number) {
    this.produtosListados = this.produtos.filter( produtos =>  {
      if (codDoGrupo == 0) {
        return produtos
      } else {
        return produtos.codGrupo == codDoGrupo;
      }
      
    })
  }

  ngOnInit(): void {
  }

}
