import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'

})
export class HomePageComponent {

  constructor(private gifsServide: GifsService){}

    get Gifs(): Gif[]{
      return this.gifsServide.gifList;

    }


}
