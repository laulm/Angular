import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  releases:any[]=[];
  constructor(
    private http:HttpClient
  ) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCB_vX_RURFF6yyeXOxMPJTBGrEb8uFome2X3Pw-_Pf2KbhpynWbD65ZXprLfEw-ZBcUy04NLlilLI1q8U'

    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  getArtists(artistName:string){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCB_vX_RURFF6yyeXOxMPJTBGrEb8uFome2X3Pw-_Pf2KbhpynWbD65ZXprLfEw-ZBcUy04NLlilLI1q8U'

    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=20`,{headers});
  }
}
