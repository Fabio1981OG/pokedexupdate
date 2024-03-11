import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, appRoutes } from './app-routing.module';
import { provideRouter } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CapitalizeFirstLetterPipe } from './pokemon-list/capitalize-first-letter.pipe';
import { AuthService } from './auth.service';
import { LoggingInterceptor } from './interceptors/LoggingInterceptor';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToasterDirective } from './toaster.directive';
import { ToasterComponent } from './toaster/toaster.component';

@NgModule({
  declarations: [
    ToasterDirective,
    AppComponent,
    PokemonListComponent,
    PokemonSearchComponent,
    CapitalizeFirstLetterPipe,
    NavBarComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers: [
    AuthService, provideRouter(appRoutes), 
    { provide: HTTP_INTERCEPTORS, 
      useClass: LoggingInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
