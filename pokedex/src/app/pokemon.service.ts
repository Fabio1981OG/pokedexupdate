import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon/${name}`).pipe(
      catchError(this.handleError)
    );
  }

  getAllPokemons(): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon?limit=30`).pipe(
      catchError(this.handleError)
    );
  }
 
  
  search(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon/${name}`).pipe(
      catchError(this.handleError)
    );
  }


  getPokemonDetailsByUrl(url: string): Observable<any> {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Erro desconhecido';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  getRandomPokemon(): Observable<any> {
    const randomId = Math.floor(Math.random() * 898) + 1; // Gera um ID aleatório
    return this.http.get(`${this.apiUrl}pokemon/${randomId}`).pipe(
      catchError(this.handleError)
    );
  }

  }

