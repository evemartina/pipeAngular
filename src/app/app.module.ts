import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// cambiar el local de la App
import LocalCL from '@angular/common/locales/es-CL';
import LocalFR from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common/';
registerLocaleData(LocalCL)
registerLocaleData(LocalFR)



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,    
    SharedModule,
    VentasModule

  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
