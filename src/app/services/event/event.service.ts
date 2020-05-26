import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { filter, share } from 'rxjs/operators';

/**
 * An utility class to manage RX events
 * Usage:
 *  export interface BroadcastEvent {
 *    name: string;
 *  }
 *
 * export class SearchMostVisitedEvent implements BroadcastEvent {
 *   public name: string;
 *   public searchTerm: string;
 *   public status: boolean;
 *   public categoryId: number;
 *
 *   constructor(fields?: Partial<SearchMostVisitedEvent>) {
 *     if (fields) {
 *       Object.assign(this, fields);
 *     }
 *   }
 * }
 *
 * this.eventService.broadcast(
 *   new SearchMostVisitedEvent({
 *       name: EVENT_ACTIVE_CATEGORY_GROUP,
 *       categoryId: this.poiDetail.poiCategory.id
 *     })
 * );
 */
@Injectable({
  providedIn: 'root'
})
export class EventService {

  protected observable: Observable<any>;
  protected observer: Observer<any>;

  constructor() {
    this.observable = Observable.create((observer: Observer<any>) => {
      this.observer = observer;
    }).pipe(share());
  }

  /**
   * Method to broadcast the event to observer
   */
  public broadcast<T>(event: T) {
    if (this.observer != null) {
      this.observer.next(event);
    }
  }

  /**
   * Method to subscribe to an event with callback
   */
  public subscribe(eventName: string, callback: (...args) => void): Subscription {
    // tslint:disable-next-line:arrow-parens
    const subscriber: Subscription = this.observable.pipe(filter((event) => {
      return event.name === eventName;
    })).subscribe(callback);
    return subscriber;
  }

  /**
   * Method to unsubscribe the subscription
   */
  public destroy(subscriber: Subscription) {
    subscriber.unsubscribe();
  }
}
