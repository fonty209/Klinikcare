import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pasienList = [
    { nama: 'Ratna', umur: 50, kelamin: 'Perempuan', alamat: 'jl. sutisno,no.59', keluhan: 'Jantung', tanggal: '2025-07-15' },
    { nama: 'Hesty', umur: 56, kelamin: 'Perempuan', alamat: 'jn papindo,no.27', keluhan: 'Sakit pinggang', tanggal: '2025-06-15' },
    { nama: 'Amir', umur: 30, kelamin: 'Laki-laki', alamat: 'Jln pantai burung,no.43', keluhan: 'Batuk kering', tanggal: '2025-07-20' },
    { nama: 'Sari', umur: 23, kelamin: 'Perempuan', alamat: 'Jln mawar', keluhan: 'demam', tanggal: '2025-07-22' },
    { nama: 'Budi', umur: 25, kelamin: 'Laki-laki', alamat: 'jn anggrek no 5', keluhan: 'Flu berat', tanggal: '2025-07-21' }
  ];
}
