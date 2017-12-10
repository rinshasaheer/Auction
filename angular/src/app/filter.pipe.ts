import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pros: any, term: any): any {
  
      //check if serach term in undefined
      if(term == undefined)return pros;
      return pros.filter(function(pro){
        return pro.name.toLowerCase().includes(term.toLowerCase());
     })
      
     }
     
     
  

}
