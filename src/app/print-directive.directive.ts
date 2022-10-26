import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[PrintDirective]'
})
export class PrintDirectiveDirective {
  @Input() color!: string;
  @Input() separator!: string;

  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    console.log('changing color')
    this.element.nativeElement.innerText=this.element.nativeElement.innerText.replaceAll(" ",this.separator);
    this.element.nativeElement.style.backgroundColor=this.color;
  }

}
