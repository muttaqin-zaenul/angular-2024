import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {
  @Input() format: string = 'upper';

  constructor(private el: ElementRef) { 
    console.log('FormatInputDirective initialized');
    console.log('Element:', this.el.nativeElement);
  }

  @HostListener('focus') onFocus() {
    // console.log('onFocus');
  }

  @HostListener('blur') onBlur() {
    // console.log('onBlur');
  }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const value = this.el.nativeElement.value;
    if (this.format === 'upper') {
      this.el.nativeElement.value = value.toUpperCase(); 
      this.el.nativeElement.style.backgroundColor = 'lightblue'; // Optional: Change background color on input
    } else if (this.format === 'lower') {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }
}
