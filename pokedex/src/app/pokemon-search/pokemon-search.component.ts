import { Component, EventEmitter, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { PokemonService } from '../pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.sass'],
})
export class PokemonSearchComponent {
  searchTerm: string = '';
  pokemon: any;
  loading: boolean = false;
  @Output() search1 = new EventEmitter<string>();
  
  
  constructor(
    private pokemonService: PokemonService,
    private location: Location
  ) { }
  search(): void {
    if (!this.searchTerm) {
      return;
    }

    this.loading = true;

    this.pokemonService.getPokemon(this.searchTerm.toLowerCase())
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (data: any) => {
          this.pokemon = data;
        },
        error: (error) => {
          console.error(error);
          this.pokemon = null;
        }
      });
  }
  goBack(): void {
    this.location.back(); 
  }

}