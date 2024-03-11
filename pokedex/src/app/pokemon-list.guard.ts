import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonListGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Verifica se o usuário está autorizado
    const isAuthorized = this.authService.isAuthorized();
    if (isAuthorized) {
      return true;
    } else {
      // Define a mensagem e o status do toaster
      this.authService.toasterMessage = 'Acesso não autorizado!';
      this.authService.toasterStatus = 'unauthorized';

      // Redireciona para a rota de busca se o usuário não estiver autorizado
      this.router.navigate(['/search']);
      return false;
    }
  }
}
