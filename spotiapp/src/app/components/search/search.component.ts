import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any[]=[];
  constructor(private spotifyService:SpotifyService) { }

  search(searchSong:string){
    console.log(searchSong);
    this.spotifyService.getArtists(searchSong).subscribe(
      (data:any)=>{
  this.artists = data.artists.items;
  console.log(this.artists);
  
      }
    )
    
  }
  ngOnInit(): void {
  }

}
