import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { NotfoundComponent } from './notfound/notfound.component'

const routes: Routes = [  
  { path: '', component: TempoAtualComponent }, 
  { path: 'tempo', component: TempoAtualComponent }, 
  { path: 'poluicao', loadChildren: () => 
  import('./modulos/poluicao/poluicao.module').then(m =>
   m.PoluicaoModule) }, 
  { path: 'busca', component: BuscaCidadeComponent },
  { path: '**', component: NotfoundComponent }];


  
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
