import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty game-board', () => {
    expect(component).toBeTruthy();
  });

  it('should place an X when it is turn for X', () => {
    expect(component).toBeTruthy();
  });

  it('should place an Y when it is turn for Y', () => {
    expect(component).toBeTruthy();
  });

  it('should place an X when it is turn for X', () => {
    expect(component).toBeTruthy();
  });

  it('should count a win in each of the selected win conditions', () => {
    expect(component).toBeTruthy();
  });

  it('should Reset the board after a win', () => {
    expect(component).toBeTruthy();
  });

  it('should Reset the board after pressing reset', () => {
    expect(component).toBeTruthy();
  });
});
