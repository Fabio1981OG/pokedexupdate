import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pokedex';

  constructor(
    private authService: AuthService
  ) { }

  toggleAuthorization(): void {
    this.authService.toggleAuth();
  }
}
