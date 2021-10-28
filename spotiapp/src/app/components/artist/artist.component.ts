import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist:any=[];
  loading:boolean=true;
  topTracks:any[]=[];
  constructor
  (
    private _activeRouter:ActivatedRoute,
    private __spotidyService:SpotifyService
  ) 
  { 

    this._activeRouter.params.subscribe(params=>{
    let artistId:string= params.id; 
    console.log(artistId);
    
    this.getArtist(artistId);
    this.getArtistTracks(artistId);
      
    })
  }

  ngOnInit(): void {
  }

  getArtist(artistId:any){
    
    this.__spotidyService.getArtist(artistId).subscribe(data=>
      
      {
        this.artist=data
        this.loading=false;
        ;
      })
  }

  getArtistTracks(artistId:string){
    this.__spotidyService.getArtistTopTracks(artistId).subscribe(data =>
      {
       this.topTracks=data;
       console.log(this.topTracks);
        
      })
  }

  splitUri(uri:string){ 
    return uri.split(":",3)
  }
}
