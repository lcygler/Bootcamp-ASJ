import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyListComponent } from './rickandmorty-list.component';

describe('RickandmortyListComponent', () => {
  let component: RickandmortyListComponent;
  let fixture: ComponentFixture<RickandmortyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RickandmortyListComponent]
    });
    fixture = TestBed.createComponent(RickandmortyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
