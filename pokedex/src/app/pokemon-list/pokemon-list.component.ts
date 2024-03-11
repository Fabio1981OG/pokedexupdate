import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this.pokemonService.getAllPokemons()
      .subscribe((data: any) => {
        data.results.forEach((result: any) => {
          this.pokemonService.getPokemonDetailsByUrl(result.url)
            .subscribe((pokemonDetails: any) => {
              this.pokemons.push(pokemonDetails);
            });
        });
      });
    }
    getRandomPokemon(): void {
      this.pokemonService.getRandomPokemon()
        .subscribe((randomPokemon: any) => {
          console.log('Random Pokemon:', randomPokemon);
          this.pokemons.push(randomPokemon); // Adiciona o Pokémon aleatório à lista de pokémons
        }, (error: any) => {
          console.error('Erro ao obter Pokémon aleatório:', error);
        });
    }
  }
 

