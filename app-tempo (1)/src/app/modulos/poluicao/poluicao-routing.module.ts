import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoluicaoComponent } from 'src/app/poluicao/poluicao.component';
import { PoluicaoHomeComponent } from './poluicao-home/poluicao-home.component';


const routes: Routes = [ 
  { path: '', redirectTo: '/poluicao/poluicao', pathMatch: 'full' }, 
   { path: 'home', component: PoluicaoHomeComponent },
   { path: 'poluicao', component: PoluicaoComponent }
   ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoluicaoRoutingModule { }
