import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { appRoutes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PostProviders } from './app/providers/post-providers'; // ✅ sesuaikan path jika beda

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      IonicModule.forRoot(),
      HttpClientModule,
      FormsModule
    ),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    PostProviders // ✅ tambahkan ini agar bisa digunakan di semua komponen
  ]
});
