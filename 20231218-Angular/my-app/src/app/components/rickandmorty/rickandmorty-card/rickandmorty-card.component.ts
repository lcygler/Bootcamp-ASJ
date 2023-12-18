import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-rickandmorty-card',
  templateUrl: './rickandmorty-card.component.html',
  styleUrls: ['./rickandmorty-card.component.css'],
})
export class RickandmortyCardComponent implements OnInit {
  character: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rickandmortyService: RickandmortyService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idCharacter');

    if (id) {
      this.rickandmortyService.getCharacterById(id).subscribe((data: any) => {
        this.character = data;
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/projects/rickandmorty']);
  }
}
