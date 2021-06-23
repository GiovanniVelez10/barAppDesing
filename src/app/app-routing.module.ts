import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({//mirar a futuro si la app tiene algun prblema, yo le añadi => any
  imports: [RouterModule.forRoot(routes, (useHash: true) => any)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
