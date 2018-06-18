import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CarouselModule.forRoot()],
  exports: [CarouselModule]
})
export class BoostrapModule {}
