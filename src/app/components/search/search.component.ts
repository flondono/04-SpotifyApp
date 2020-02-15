import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtista(termino).subscribe(data => {
      console.log(data);
      this.artistas = data;
    })
  }

}
