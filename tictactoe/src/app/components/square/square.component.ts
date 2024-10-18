import { Component, Input } from '@angular/core';
import { SquareValue } from './square-value.type';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css',
})
export class SquareComponent {
  @Input() value: SquareValue = null;
}
