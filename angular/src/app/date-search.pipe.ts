import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSearch'
})
export class DateSearchPipe implements PipeTransform {

  transform(value: any, startDate?: any,endDate?: any,start?:any,end?:any): any {
    // console.log(startDate);
    console.log(start);
    console.log(end);
   // return value;
    return value.filter(function (el: any) {
      // console.log(startDate);
      // console.log(new Date(el.start_date));
      var end1 = new Date(endDate);
      end1.setHours(23,59,59,999);
      if((!start || new Date(el[start]) >= new Date(startDate)) &&  (!end || new Date(el[end]) <= end1)){
        return true;
      }
  //    return el.pollqtn.toLowerCase().indexOf(args) > -1;
    });

  }

}
