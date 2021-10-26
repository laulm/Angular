import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items:any[]=[];
  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  seeArtist(item:any){
    let artistId;
    if (item.type === "album") {
      artistId=item.artists[0].id
    }
    if (item.type === "artist") {
      artistId=item.id;
    }
     
    this._router.navigate(['/artist',artistId])
  }

}
