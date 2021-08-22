import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FirstPlaceComponent } from './components/main/components/first-place/first-place.component';
import { SecondPlaceComponent } from './components/main/components/second-place/second-place.component';
import { ThirdPlaceComponent } from './components/main/components/third-place/third-place.component';
import { FourthPlaceComponent } from './components/main/components/fourth-place/fourth-place.component';
import { FifthPlaceComponent } from './components/main/components/fifth-place/fifth-place.component';
import { SixthPlaceComponent } from './components/main/components/sixth-place/sixth-place.component';
import { ContactComponent } from './components/main/components/contact/contact.component';
import { JoinOurComponent } from './components/main/components/join-our/join-our.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FirstPlaceComponent,
    SecondPlaceComponent,
    ThirdPlaceComponent,
    FourthPlaceComponent,
    FifthPlaceComponent,
    SixthPlaceComponent,
    ContactComponent,
    JoinOurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
