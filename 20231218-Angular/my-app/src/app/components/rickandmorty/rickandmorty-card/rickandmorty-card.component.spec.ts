import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyCardComponent } from './rickandmorty-card.component';

describe('RickandmortyCardComponent', () => {
  let component: RickandmortyCardComponent;
  let fixture: ComponentFixture<RickandmortyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickandmortyCardComponent]
    });
    fixture = TestBed.createComponent(RickandmortyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
