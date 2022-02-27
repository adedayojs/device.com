import { Observable } from 'rxjs';

export function mockRequest<T>(arg: T): Observable<T> {
  let obs: Observable<T> = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(arg);
      subscriber.complete();
    }, 1000);
  });
  return obs;
}
