
import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  styleUrl: './sidebar.component.css',
  templateUrl: './sidebar.components.html'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {

  }

  get tags(){
    return this.gifsService.tagsHistory;
  }


  searchTag(tag: string){
    this.gifsService.searchTag(tag);
  }


}
