import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(maths: any[], searchTerm:string): unknown {
    

    if(!maths||!searchTerm)
    {
      return maths;
    }
    else{
      return maths.filter(m=>m.TopicName.toLowerCase().indexof(searchTerm.toLowerCase())!==-1)
    }

  }

}
