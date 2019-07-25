import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SliderContext } from './configs/slider-context-model';

@Directive({
  selector: '[ss]'
})
export class SimpleSliderDirective implements OnInit {
  
  constructor(
    private _tRef: TemplateRef<SliderContext>,
    private _vcRef: ViewContainerRef
  ) { }

  private _sliderContext: SliderContext | null = null;
  private _index: number = 0;

  @Input('ssFrom') images: Array<string> = [];

  ngOnInit(): void {
    this._sliderContext = {
      $implicit: this.images[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev()
      }
    };
 
    this._vcRef.createEmbeddedView(this._tRef, this._sliderContext);
    
  }

  public next() {
    this._index++;
    if(this._index >= this.images.length) {
      this._index = 0;
    }
    this._sliderContext.$implicit = this.images[this._index];
  }

  public prev() {
    this._index--;
    if(this._index < 0) {
      this._index = this.images.length - 1;
    }
    this._sliderContext.$implicit = this.images[this._index];
  }
}
