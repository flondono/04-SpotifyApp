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
      'Authorization': 'Bearer QBvot3bgR2YlqGS7FmdqAhipC2algSg5aWpBvj1kRWOOTFnz8XuTnl1R3RqCMqRYfaC1FqV6wlZPW_jvoM'
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

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).
      pipe(map(data => data['tracks']));

  }

}
