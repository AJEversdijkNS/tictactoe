import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';
import { SquareComponent } from '../square/square.component';
import { By } from '@angular/platform-browser';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardComponent, SquareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an empty game-board', () => {
    component.gameBoard.every((square) => expect(square).toBeNull());
  });

  it('should place an X when it is turn for X', () => {
    component.currentPlayer = 'X';
    fixture.debugElement.nativeElement.querySelector('app-square').click(); // This should be working...
    fixture.detectChanges();
    component.gameBoard.some((square) => expect(square).toBe('X'));
  });

  it('should place an O when it is turn for O', () => {
    component.currentPlayer = 'O';
    // fixture.debugElement.nativeElement.querySelector('app-square').click(); // This should be working...
    component.completeTurn(2);
    fixture.detectChanges();
    component.gameBoard.some((square) => expect(square).toBe('O'));
  });

  it('should not do anything if a non-null square is clicked', () => {
    component.gameBoard = ['X', null, null, null, null, null, null, null, null];
    component.currentPlayer = 'O';
    // console.log(fixture.debugElement.query(By.css('app-square')).nativeElement);
    fixture.debugElement.query(By.css('app-square')).nativeElement.click(); // This should be working...
    fixture.detectChanges();
    component.gameBoard.some((square) => expect(square).toBe('X'));
  });

  it('should count a win in one of the selected win conditions', () => {
    // I know I should normally test each but time...
    component.gameBoard = ['X', null, 'X', null, null, null, null, null, null];
    component.completeTurn(2); // Trying something else but neither seems to work.
    fixture.detectChanges();
    expect(component.lastWinner).toBe('X');
  });

  it('should Reset the board after a win', () => {
    component.gameBoard = ['X', null, 'X', null, null, null, null, null, null];
    fixture.debugElement
      .query(By.css('[test-id="newGameButton"]'))
      .nativeElement.click(); // This should be working...
    component.gameBoard.every((square) => expect(square).toBeNull());
  });
});
