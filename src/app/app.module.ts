import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './containers/auth/auth.module';
import { AppComponent } from './containers/app/app.component';
import { Store } from 'store';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  declarations: [AppComponent, HeaderComponent, NavComponent],
  bootstrap: [AppComponent],
  providers: [Store],
})
export class AppModule {}
