import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-count-down-timer',
    template: `
  <div>
    {{message}}
  </div>
`,
inputs : ["inputDate"]
})
export class CountDownTimerComponent implements OnInit, OnDestroy {

    private future: Date;
    private futureString: string;
    private diff: number;
    private $counter: Observable<number>;
    private subscription: Subscription;
    private message: string;
    private inputDate: string;

    constructor(elm: ElementRef) {
        this.futureString = elm.nativeElement.getAttribute('inputDate');
    }

    dhms(t) {
        var days, hours, minutes, seconds;
        // days = Math.floor(t / 86400);
        // t -= days * 86400;
        hours = Math.floor(t / 3600);
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        return [
            // days + 'd',
            hours + ':',
            this.lpad(minutes) + ':',
            this.lpad(seconds)
        ].join('');
    }

    lpad(num): string {
      let s = num+"";
      if (s.length < 2) s = "0" + s;
      return s;
    }

    ngOnInit() {
        this.future = new Date(this.inputDate);
        this.$counter = Observable.interval(1000).map((x) => {
            this.diff = Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
            return x;
        });

        this.subscription = this.$counter.subscribe((x) => this.message = this.dhms(this.diff));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}