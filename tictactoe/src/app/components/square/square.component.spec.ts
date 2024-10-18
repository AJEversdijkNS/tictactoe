import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let component: SquareComponent;
  let fixture: ComponentFixture<SquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should default value should be null', () => {
    expect(component.value).toBeNull();
  });

  it('Should take input null', () => {
    component.value = null;
    expect(component.value).toBeNull();
  });

  it('Should take input "X"', () => {
    component.value = 'X';
    expect(component.value).toBe('X');
  });

  it('Should take input "Y"', () => {
    component.value = 'Y';
    expect(component.value).toBe('Y');
  });
});
