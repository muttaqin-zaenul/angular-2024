import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormatInput2]'
})
export class FormatInput2Directive {
  @HostBinding('style.color') color: string = 'black';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus') onFocus() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    this.color = 'red'; // Change text color on focus
  }

  @HostListener('blur') onBlur() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
    this.color = 'black'; // Reset text color on blur
  }

}
