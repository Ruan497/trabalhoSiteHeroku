import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/Conta';
import { ContaReceitaService } from '../../service/conta-receita.service';

@Component({
  selector: 'app-salvar-receita',
  templateUrl: './salvar-receita.component.html',
  styleUrls: ['./salvar-receita.component.css']
})
export class SalvarReceitaComponent implements OnInit {

  receita: Conta = new Conta()

  constructor(private contaReceita: ContaReceitaService) { }

  ngOnInit(): void {
  }

  salvarReceita(){
    this.contaReceita.salvarRLs(this.receita)
    this.receita = new Conta()
  }



}
