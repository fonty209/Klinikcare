import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab4',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss']
})
export class Tab4Page {
  pasienList = [
    {
      nama: 'Ratna',
      umur: 50,
      kelamin: 'Perempuan',
      alamat: 'Jln Sutrisno no.59',
      keluhan: 'Jantung',
      tanggal: '2025-07-15'
    },
    {
      nama: 'Hesty',
      umur: 66,
      kelamin: 'Perempuan',
      alamat: 'Jln Pepaya no.27',
      keluhan: 'Sakit pinggang',
      tanggal: '2025-06-15'
    },
    {
      nama: 'Amir',
      umur: 30,
      kelamin: 'Laki-laki',
      alamat: 'Jln Paniki Burung no.43',
      keluhan: 'Batuk kering',
      tanggal: '2025-07-20'
    },
    {
      nama: 'Sari',
      umur: 23,
      kelamin: 'Perempuan',
      alamat: 'Jln Mawar',
      keluhan: 'Demam',
      tanggal: '2025-07-22'
    },
    {
      nama: 'Budi',
      umur: 25,
      kelamin: 'Laki-laki',
      alamat: 'Jln Anggrek no.5',
      keluhan: 'Flu berat',
      tanggal: '2025-07-21'
    }
  ];

  getInitial(nama: string): string {
    return nama.charAt(0).toUpperCase();
  }

  getStatus(tanggal: string): string {
    const today = new Date().toISOString().slice(0, 10);
    if (tanggal === today) return 'Hari Ini';
    return new Date(tanggal) > new Date(today) ? 'Akan Datang' : 'Selesai';
  }
}
