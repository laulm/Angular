import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {

  transform(genre: any[]): any {
    if (!genre) {
      return "No Genre";
    }
    if (genre.length > 0 ) {
      return genre[0];
    }
    

  }

}
