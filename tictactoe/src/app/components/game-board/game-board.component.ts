import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css',
})
export class GameBoardComponent implements OnInit {
  gameBoard: any[] = Array(9).fill(null);
  currentPlayer: string = 'X';
  lastWinner: string | null = null;

  winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  ngOnInit(): void {
    this.newGame();
    this.lastWinner = null;
  }

  newGame(): void {
    this.resetGame();
  }

  resetGame(): void {
    this.gameBoard = Array(9).fill(null);
    this.currentPlayer = 'X';
  }

  completeTurn(squareIndex: number): void {
    if (!this.gameBoard[squareIndex]) {
      this.gameBoard.splice(squareIndex, 1, this.currentPlayer);
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      const isWinner = !!this.calculateWinner();
      if (isWinner) {
        this.lastWinner = this.calculateWinner();
        this.resetGame();
      }
    }
  }

  calculateWinner(): string | null {
    for (let i = 0; i < this.winConditions.length; i++) {
      const [a, b, c] = this.winConditions[i];
      if (
        this.gameBoard[a] &&
        this.gameBoard[a] === this.gameBoard[b] &&
        this.gameBoard[a] === this.gameBoard[c]
      ) {
        return this.gameBoard[a];
      }
    }
    return null;
  }
}
