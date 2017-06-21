import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Foo1Component } from './foo1/foo1.component';
import { Foo2Component } from './foo2/foo2.component';
import { Foo3Component } from './foo3/foo3.component';
import { Bar1Component } from './bar1/bar1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Foo1Component, Foo2Component, Foo3Component, Bar1Component]
})
export class FunctionsModule { }
