import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/Conta';
import { ContaReceitaService } from '../../service/conta-receita.service';


@Component({
  selector: 'app-salvar-conta',
  templateUrl: './salvar-conta.component.html',
  styleUrls: ['./salvar-conta.component.css']
})
export class SalvarContaComponent implements OnInit {

  cont = new Conta
  constructor(private contaReceita: ContaReceitaService) { }

  ngOnInit(): void {
  }

  salvar(){
    this.cont.valor = 0 - this.cont.valor
    this.contaReceita.salvarCLs(this.cont) 
    this.cont = new Conta()
  }

}
