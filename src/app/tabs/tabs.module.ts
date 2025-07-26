import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page'; // Standalone

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TabsPageRoutingModule,
    TabsPage  // ✅ Tambahkan di sini, bukan di declarations
  ],
  
})
export class TabsPageModule {}
