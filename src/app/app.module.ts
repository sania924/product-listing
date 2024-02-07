import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { AccordionModule } from 'primeng/accordion';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StyleClassModule,
    AccordionModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
