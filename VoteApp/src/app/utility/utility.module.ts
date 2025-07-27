import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuplikatDirective } from './directives/duplikat.directive';
import { FormatInputDirective } from './directives/format-input.directive';
import { FormatInput2Directive } from './directives/format-input2.directive';
import { SummaryPipe } from './summary.pipe';
import { FiltersiswaPipe } from './filtersiswa.pipe';
import { UsiaPipe } from './usia.pipe';
import { KapitalPipe } from './kapital.pipe';



@NgModule({
  declarations: [
    DuplikatDirective,
    FormatInputDirective,
    FormatInput2Directive,
    SummaryPipe,
    FiltersiswaPipe,
    UsiaPipe,
    KapitalPipe],
  imports: [
    CommonModule,
  ],
  exports: [
    DuplikatDirective,
    FormatInputDirective,
    FormatInput2Directive,
    SummaryPipe,
    FiltersiswaPipe,
    UsiaPipe,
    KapitalPipe
  ]
})
export class UtilityModule { }
