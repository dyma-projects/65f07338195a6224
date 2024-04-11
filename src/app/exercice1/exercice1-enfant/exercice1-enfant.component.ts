import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public childResult: number;
  @Output() private countUpdate: EventEmitter<number> = new EventEmitter();

  constructor () {
  }

  ngOnInit() { }

  public increment(): void {
    this.childResult++;
    this.countUpdate.emit(this.childResult);
  }

  public decrement(): void {
    this.childResult--;
    this.countUpdate.emit(this.childResult);
  }
}
