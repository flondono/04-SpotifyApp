import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;

  // paises: any[] = [];

  //constructor(private http: HttpClient) {
  // console.log('Constructor del Home hecho');
  // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resp: any) => {
  //   this.paises = resp;
  //   console.log(resp);
  // });
  //}

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }
}
