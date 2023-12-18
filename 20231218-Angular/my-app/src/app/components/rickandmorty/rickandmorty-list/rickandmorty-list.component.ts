import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty-list',
  templateUrl: './rickandmorty-list.component.html',
  styleUrls: ['./rickandmorty-list.component.css'],
})
export class RickandmortyListComponent implements OnInit {
  characters: any[] = [];

  constructor(private apiService: RickandmortyService) {}

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}
