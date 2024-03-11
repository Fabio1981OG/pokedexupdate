// No arquivo de configuração do roteamento (app-routing.module.ts)

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListGuard } from './pokemon-list.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'list', component: PokemonListComponent, canActivate: [PokemonListGuard] },
  { path: 'search', component: PokemonSearchComponent }
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
