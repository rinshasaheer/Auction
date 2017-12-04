import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(pros: any, term: any): any {
    //check if serach term in undefined
    if(term == undefined)return pros;
    return pros.filter(function(pro){
      return pros.name.toLowerCase().includes(term.toLowerCase());
    })
   }

}
