import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangePipe'
})
export class RangePipePipe implements PipeTransform {

  transform(value: number): number[] {
    return Array.from({length: value},  (_, index) => index + 1)
  }

}
