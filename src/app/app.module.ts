import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './containers/auth/auth.module';
import { AppComponent } from './containers/app/app.component';
import { Store } from 'store';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HelloComponentComponent } from './containers/app/hello.component/hello.component.component';
import { MapComponent } from './containers/app/map/map.component';
import { AgVirtualScrollModule } from 'ag-virtual-scroll';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    AgVirtualScrollModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    NavComponent,
    HelloComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [Store],
})
export class AppModule {}
