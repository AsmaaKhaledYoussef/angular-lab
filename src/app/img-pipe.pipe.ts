import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgPipe'
})
export class ImgPipePipe implements PipeTransform {

  transform(value: string, defaultImgURL: string): string {
    if (value == "") {
      return defaultImgURL;
    }
    return value;
  }

}
