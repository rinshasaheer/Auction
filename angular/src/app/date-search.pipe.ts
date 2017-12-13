import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSearch'
})
export class DateSearchPipe implements PipeTransform {

  transform(value: any, startFrom?: any,startUpto?: any,endFrom?:any,endUpto?:any): any {
   // console.log(startDate);
    console.log(startFrom);
    console.log(startUpto);
    console.log(endFrom);
    console.log(endUpto);
    // console.log(new Date(startFrom));
   // return value;
    return value.filter(function (el: any) {
      // console.log(startDate);
      // console.log(new Date(el.start_date));
      if(startFrom != ''){
        var startFrom1 = new Date(startFrom);
        var startUpto1 = new Date(startUpto);
        startUpto1.setHours(23,59,59,999);
      }
      if(endFrom != ''){
        var endFrom1 = new Date(endFrom);
        var endUpto1 = new Date(endUpto);
        endUpto1.setHours(23,59,59,999);
      }
    
      if(
        ( startFrom == '' || ((new Date(el.start_date) >= startFrom1)  && (new Date(el.start_date) <= startUpto1)) ) &&
        ( endFrom == '' || ((new Date(el.end_date) >= endFrom1)  && (new Date(el.end_date) <= endUpto1)) )
    ){
        return true;
      }
 

      // if(
      //   (new Date(el.start_date) >= new Date(startFrom)) && 
      //   (new Date(el.start_date) >= new Date(startFrom)) && 
      //   (new Date(el.start_date) >= new Date(startFrom)) && 
      //   (new Date(el.start_date) >= new Date(startFrom)) 
      // ){
      //   return true;
      // }
  //    return el.pollqtn.toLowerCase().indexOf(args) > -1;
    });
  //return value;
  }

}
