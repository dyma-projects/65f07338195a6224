import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit, AfterViewInit {
  public valeur: string;

  @ViewChild('value') elRef: ElementRef<HTMLInputElement>;

  constructor () {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // acces input value after view init
    this.valeur = this.elRef.nativeElement.value;

    // Listen input value change
    this.elRef.nativeElement.addEventListener('input', () => {
      this.valeur = this.elRef.nativeElement.value;
    });

  }
}
