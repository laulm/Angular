import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: any[]=[];
  releases:any[]=[];
  loading:boolean=true;

  constructor(
    private http:HttpClient,
    private spotifyService:SpotifyService,
    private _router:Router
  ) { 
    // this.http.get('https://restcountries.com/v2/capital/es').subscribe((data:any) => {
    
    // this.countries = data;  
    // console.log(data);

    // })
    
    this.spotifyService.getNewReleases().
    subscribe((data:any) =>{
    this.releases = data
    console.log(this.releases);
    this.loading=false;
    });
  
    
    
  }

  ngOnInit(): void {
  }

}
