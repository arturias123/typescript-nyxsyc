// Import stylesheets
import './style.css';
import { fromEvent, fromEventPattern, Observable, of, throwError, timer, defer, interval } from 'rxjs';
import { throttleTime, map, take } from 'rxjs/operators';


// Write TypeScript code!
// fromEvent(document, 'mousemove').pipe(
//   throttleTime(1000), map((ev: MouseEvent) => ev.clientX + ' ' + ev.clientY)
//   ).subscribe(console.log);

const observerA = {
  next: val => console.log(`ObserverA: ${val}`),
  error: err => console.error(err),
  complete: () => console.log('ObserverA complete')
}
const observerB = {
  next: val => console.log(`ObserverB: ${val}`),
  error: err => console.error(err),
  complete: () => console.log('ObserverB complete')
}

// of
of('hello');

// fromEvent
fromEvent(document, 'click');

// fromEventPattern
fromEventPattern(
  handler => {
    document.addEventListener('click', handler);
  },    // add handler
  handler => {
    document.removeEventListener('click', handler);
  }     // remove handler
);

// interval
interval(500);
const observable = interval(500).pipe(take(5));

observable.subscribe(observerA);

setTimeout(() => {
  observable.subscribe(observerB);
}, 1500);

// timer
timer(500, 1000);

// throwError
throwError('error');

// defer
const random$ = defer(() => of(Math.random()));

