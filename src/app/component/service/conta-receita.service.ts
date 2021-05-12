
import { Injectable } from '@angular/core';
import { Conta } from 'src/app/Conta';

@Injectable({
  providedIn: 'root'
})
export class ContaReceitaService {

  constructor() { }

  cts: Conta[] = []
  rcs: Conta[] = []
  meses: string[] = []

  /*salvarC(conta: Conta){
      this.cts.push(conta)   
      this.mes(conta)
      this.salvarCLs()
  }
  SalvarR(conta: Conta){
    this.rcs.push(conta)
    this.mes(conta)

  }*/

  salvarCLs(conta: Conta) {
    this.rec()
    this.mes(conta)
    this.cts.push(conta)
    const dt = JSON.stringify(this.cts)
    localStorage.setItem('cts', dt)
  }
  salvarRLs(receita: Conta) {
    this.rec()
    this.mes(receita)
    this.rcs.push(receita)
    const dt = JSON.stringify(this.rcs)
    localStorage.setItem('rcs', dt)
  }

  rec() {
    if (localStorage.getItem('cts')) {
      this.cts = JSON.parse(localStorage.getItem('cts') || '{}')
      //console.log(this.cts)
    } else {
      this.cts = []
    }

    if (localStorage.getItem('rcs')) {
      this.rcs = JSON.parse(localStorage.getItem('rcs') || '{}')
      //console.log(this.rcs)
    } else {
      this.rcs = []
    }
  }

  mes(conta: Conta) {
    this.recMeses()
    let mes = conta.data.slice(0, 4)
    if(this.meses.includes(mes)){
      alert('nova conta para o ano ' + mes)
    } else{
      alert('primeira conta do ano de ' + mes)
      this.meses.push(mes)
      const y = JSON.stringify(this.meses)
      localStorage.setItem('year', y)
    }

  }
  recMeses() {
    if (localStorage.getItem('year')) {
      this.meses = JSON.parse(localStorage.getItem('year') || '[]')
    } else {
      this.meses = []
    }
  }

  
  filt(m: string) {
    for (let i = 0; i < this.cts.length; i++) {
      console.log(this.cts[i].data)

      if (this.cts[i].data.slice(0, 4) !== m) {
        this.cts.splice(i, 1)
      }
    }
    
    for (let i = 0; i < this.rcs.length; i++) {
      
      if (this.rcs[i].data.slice(0, 4) !== m) {
        this.rcs.splice(i, 1)
      }
    }

  }
}
