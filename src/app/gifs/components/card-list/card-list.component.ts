
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  styleUrl: './card-list.component.css',
  templateUrl: './card-list.component.html'

})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];


}
