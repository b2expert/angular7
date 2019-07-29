import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dImg'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: any, args?: any, arg2?: any, arg3?: any): any {
    if(!value) {
      value = 'assets/images/slider/404.png';
    }
    return value;
  }

}
