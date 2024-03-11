import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {
  toasterMessage: string = 'Não autorizado!'; // Inicialmente vazio

  constructor(public authService: AuthService) { }

  toggleAuthorization() {
    this.authService.toggleAuth(); // Atualiza a autorização
    if (typeof this.authService.toasterMessage === 'string') {
      this.toasterMessage = this.authService.toasterMessage;
    } else {
      console.error('A mensagem do toaster não é uma string válida.');
    }
  }
}
