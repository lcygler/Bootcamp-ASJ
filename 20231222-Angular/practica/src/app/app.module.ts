import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { MiPipePipe } from './pipes/mi-pipe.pipe';
import { PotenciaPipe } from './pipes/potencia.pipe';
import { PrimosPipe } from './pipes/primos.pipe';
import { ToStringPipe } from './pipes/to-string.pipe';

@NgModule({
  declarations: [AppComponent, PipesComponent, MiPipePipe, PotenciaPipe, PrimosPipe, ToStringPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
