import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDuplikat]'
})
export class DuplikatDirective {
  @Input() set appDuplikat(jumlah: number) {
    for (let i = 0; i < jumlah; i++) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
