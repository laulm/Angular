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
  constructor(
    private _activeRouter:ActivatedRoute,
    private __spotidyService:SpotifyService
  ) { 

    this._activeRouter.params.subscribe(params=>{
    let artistId:string= params.id; 
    this.__spotidyService.getArtist(artistId).subscribe(data=>
      
      {
        this.artist=data
        console.log(this.artist)
        console.log(this.artist.images[0].url);
        this.loading=false;
        ;
      })
      
    })
  }

  ngOnInit(): void {
  }

}
