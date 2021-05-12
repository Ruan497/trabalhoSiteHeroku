import { Component, OnInit } from '@angular/core';
import { ContaReceitaService } from '../../service/conta-receita.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private contaReceita: ContaReceitaService) { }

  ngOnInit(): void {
    this.contaReceita.rec()
    this.contaReceita.recMeses()
  }

}
