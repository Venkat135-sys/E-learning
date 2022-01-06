import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(chemistry: any[], searchHere: string): unknown {
    
    if(!chemistry && !searchHere)
    {
      return chemistry;
    }
    else{
      return chemistry.filter(c=>c.TopicName.toLowerCase().indexof(searchHere.toLocaleLowerCase())==-1);
    }
  }

}
