import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//operador map para tomar solo una parte o todo el resultado del servicio
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBLUz9Mho6h7MPKmt5yDdMg6brZuCQqZjeCIBwFOC6k4UEKdmP0PHS5Bv1K8_DNu3U_eJDLNmXEkHHmtzE'
    });

    return this.http.get(url, { headers })
  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQCrKteSos3K7nIAcBWCcE9MqjqCUyd0yUnvIYmG8E1fgOkyXhBN4U-a45LXNfsdxeUUOp3eEM1wNZO1qZg'
    // });

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => {
        return data['albums'].items;
      }))


  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
      .pipe(map(data => {
        return data['artists'].items;
      }))
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`)
    //.pipe(map(data => {
    //return data['artists'].items;
    //}));
  }

}
