import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {EventService} from './shared/event.service'
import {map} from 'rxjs/operators'
@Injectable()
export class EventListResolver implements Resolve<any>
{

constructor(private eventservice:EventService)
{

}

  resolve()
  {
    // We are calling getEvents() whiich return Observables and we are calling map on that observable which gives us access to events 
    //that are passed on it on the stream.and thenb returning those events
   // when u listen to observable we use to call subscribe()  
   //bcs here we wants in resolve we need actually to retuen observable ,so we use map it will do subscription it will give observable
   // we are returning the events inside map expression these events then will get pass along to the components to find in our route
      return this.eventservice.getEvents().pipe(map(events=>events))
  }
}