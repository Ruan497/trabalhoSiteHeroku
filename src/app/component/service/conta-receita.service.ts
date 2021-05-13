
import { Injectable } from '@angular/core';
import { Conta } from 'src/app/Conta';

@Injectable({
  providedIn: 'root'
})
export class ContaReceitaService {

  constructor() { }

  cts: Conta[] = []
  rcs: Conta[] = []
  anos: string[] = []


  //salva conta(despesa) no localStorage
  salvarCLs(conta: Conta) {
    this.rec()
    this.ano(conta)
    this.cts.push(conta)
    const dt = JSON.stringify(this.cts)
    localStorage.setItem('cts', dt)
  }

  //salva receita no localStorage
  salvarRLs(receita: Conta) {
    this.rec()
    this.ano(receita)
    this.rcs.push(receita)
    const dt = JSON.stringify(this.rcs)
    localStorage.setItem('rcs', dt)
  }

  //pega os dados do local storage e armazena nas listas cts(despesas) e/ou rcs(receitas)
  rec() {
    if (localStorage.getItem('cts')) {
      this.cts = JSON.parse(localStorage.getItem('cts') || '{}')
    
    } else {
      this.cts = []
    }

    if (localStorage.getItem('rcs')) {
      this.rcs = JSON.parse(localStorage.getItem('rcs') || '{}')

    } else {
      this.rcs = []
    }
  }

  //pega o ano da data e armazena no localStorage
  ano(conta: Conta) {
    this.recAnos()
    let ano = conta.data.slice(0, 4)
    if(this.anos.includes(ano)){
      alert('nova conta para o ano ' + ano)
    } else{
      alert('primeira conta do ano de ' + ano)
      this.anos.push(ano)
      const y = JSON.stringify(this.anos)
      localStorage.setItem('year', y)
    }

  }


  //pega os dados do localStorage e armazena na lista anos
  recAnos() {
    if (localStorage.getItem('year')) {
      this.anos = JSON.parse(localStorage.getItem('year') || '[]')
    } else {
      this.anos = []
    }
  }


  //filtra a lista, removendo objetos cujo ano não sejam iguais ao passado como parâmetro
  filt(a: string) {
    for (let i = 0; i < this.cts.length;) {
      if (this.cts[i].data.slice(0, 4) !== a) {
        this.cts.splice(i, 1)
      } else {
        i++
      }

    }

    
    for (let i = 0; i < this.rcs.length;) {
      
      if (this.rcs[i].data.slice(0, 4) !== a) {
        this.rcs.splice(i, 1)
      } else {
        i++
      }
    }

  }
}
