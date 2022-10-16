import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './containers/auth/auth.module';
import { AppComponent } from './containers/app/app.component';

export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
