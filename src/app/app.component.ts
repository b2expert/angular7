import { Component, OnInit, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { SLIDER_IMAGE_LIST } from './mockup/slider-mockup-data';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private _dImage: DefaultImagePipe
  ) { }

  public sliderImageList = SLIDER_IMAGE_LIST;
  public today: any = new Date();

  ngOnInit() {
    const imagePath = this._dImage.transform('');
  }
  
}
