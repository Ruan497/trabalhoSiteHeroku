import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { Conta } from 'src/app/Conta';
import { ContaReceitaService } from '../../service/conta-receita.service';
import { Chart } from 'chart.js'



@Component({
  selector: 'app-ver-contas',
  templateUrl: './ver-contas.component.html',
  styleUrls: ['./ver-contas.component.css']
})
export class VerContasComponent implements OnInit {
  meses: string[]
  d: Conta[]
  r: Conta[]
  somaDespesas: number = 0
  somaReceitas: number = 0

  constructor(private contaReceita: ContaReceitaService) { }


  ngOnInit(): void {
    this.contaReceita.recMeses()
    this.meses = this.contaReceita.meses

      }
    

  show(m: string) {
    this.contaReceita.rec()
    this.contaReceita.filt(m)
    this.d = this.contaReceita.cts
    this.r = this.contaReceita.rcs
    this.sum()
    this.grafico()
    console.log(this.d)
    console.log(this.r)
  

  }

  sum() {
    this.somaDespesas = 0
    this.somaReceitas = 0
    for (let i = 0; i < this.d.length; i++) {
      this.somaDespesas += this.d[i].valor
      console.log(i)
    }

    for (let i = 0; i < this.r.length; i++) {
      this.somaReceitas += this.r[i].valor
      console.log(i)
    }

  
  }

  grafico() {
    var chart = new Chart('meuCanvas', {
      type: 'pie',
      data:{
        labels:["Despesas: " + this.somaDespesas , "Receitas: " + this.somaReceitas],
        datasets:[{
          label: "Vote Now",
          data:[this.somaDespesas, this.somaReceitas],
          backgroundColor:[
            'rgb(185, 6, 6)',
            'rgb(3, 129, 20)',
          ]
        }]
      },
      options:{
        title:{
          text:"Bar Chart",
          display:true
        },

        scales: {
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
              }]
            }
          }
        })
    
  }
    

}
