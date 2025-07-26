import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostProviders {
  server: string = 'http://localhost/pasien/api/'; // Ganti dengan path API-mu

  constructor(private http: HttpClient) {}

  getAllPasien(): Observable<any> {
    return this.http.get(this.server + 'get_pasien.php');
  }

  tambahPasien(pasien: any): Observable<any> {
    return this.http.post(this.server + 'tambah_pasien.php', pasien);
  }

  updatePasien(pasien: any): Observable<any> {
    return this.http.post(this.server + 'update_pasien.php', pasien);
  }

  hapusPasien(id_pasien: number): Observable<any> {
    return this.http.post(this.server + 'hapus_pasien.php', { id_pasien });
  }
}
