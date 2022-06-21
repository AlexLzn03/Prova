import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrosComponent } from './carros/carros.component';
import { FormsModule } from '@angular/forms';
import { CarroDetailComponent } from './carro-detail/carro-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    CarrosComponent,
    CarroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
