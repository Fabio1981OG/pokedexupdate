import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Importe o AppModule corretamente

platformBrowserDynamic().bootstrapModule(AppModule) // Inicialize o AppModule
  .catch(err => console.error(err));
