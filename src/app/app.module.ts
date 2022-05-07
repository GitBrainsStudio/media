import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { AppRouteReuseStrategy } from './core/route-strategy/models/strategy.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: AppRouteReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }