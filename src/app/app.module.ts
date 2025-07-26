import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PostProviders } from './providers/post-providers'; // ✅ Sesuaikan path kalau perlu

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule  // ✅ WAJIB agar HttpClient bisa dipakai
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PostProviders     // ✅ Tambahkan provider kamu di sini
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
