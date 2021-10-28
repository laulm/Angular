import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any[]=[];
  loading:boolean=false;
  errorFlag:boolean=false;
  errorMessage:string="";

  constructor(private spotifyService:SpotifyService) { }

  search(searchSong:string){
    this.loading=true;
    console.log(searchSong);
    this.spotifyService.getArtists(searchSong).subscribe(
      (data:any)=>{
  this.artists = data;
  console.log(this.artists);
  this.loading=false;
      },(err)=>{
        if (err.error.error.message === 'No search query') {
          this.loading=false;
          this.artists=[];
        }
        this.errorFlag=true;
      this.errorMessage = err.error.error.message;
      this.loading=false;
      }
    )
    
  }
  ngOnInit(): void {
  }

}
