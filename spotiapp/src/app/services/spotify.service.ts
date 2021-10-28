import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  releases:any[]=[];
  constructor(
    private http:HttpClient
  ) { }

  getQuery(query:string){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCmqNPyKRpw9zixVnDNzMFWRW-kY1_PBKuP78UMYzn4RK4KiUOe2Yel6jijREbd0mUHsUV_70uFOyi_ahM'

    });
    const url=`https://api.spotify.com/v1/${query}`;
    return this.http.get(url,{headers})
  }
  getNewReleases(){
    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQDNLkoeo6IG1hrAPvNYRc1RaAPL1KuiroBM3aXNtrpvXuFB4yNJ1LFeVNZejV1mxjJRjoZz_wbAyikZZC8'

    // });

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).
    // pipe( map( (data:any) => data['albums'].items))
    return this.getQuery('browse/new-releases').
    pipe( map( (data:any) => data['albums'].items))
  }

  getArtists(artistName:string){

    // const headers = new HttpHeaders({
    //   'Authorization':'Bearer BQDNLkoeo6IG1hrAPvNYRc1RaAPL1KuiroBM3aXNtrpvXuFB4yNJ1LFeVNZejV1mxjJRjoZz_wbAyikZZC8'
    // })

    return this.getQuery(`search?q=${artistName}&type=artist&limit=20`).
    pipe( map((data:any) => data['artists'].items))
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getArtistTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map((data:any) => data['tracks']));
   
  }
}
