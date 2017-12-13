import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(polls: any, searchTerm: any): any {
    if(searchTerm ===  undefined){
      return polls;

    }
    return polls.filter(function(poll){
      // console.log(poll.question);
      return poll.question.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
