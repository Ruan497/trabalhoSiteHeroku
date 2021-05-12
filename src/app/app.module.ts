import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/temp/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list/';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select'

import {  SalvarContaComponent } from './component/nav/salvar-conta/salvar-conta.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './component/temp/menu/menu.component';
import { VerContasComponent } from './component/nav/ver-contas/ver-contas.component';
import { SalvarReceitaComponent } from './component/nav/salvar-receita/salvar-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SalvarContaComponent,
    MenuComponent,
    VerContasComponent,
    SalvarReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
