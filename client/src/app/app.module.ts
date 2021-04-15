import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/share/card/card.component';
import { CardModule } from './components/share/card/card.module';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/share/header/header.component';
import { FormsModule } from '@angular/forms';
// const appRoutes: Routes = [{ path: '', component: CardComponent }];
@NgModule({
  declarations: [AppComponent, CardComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
