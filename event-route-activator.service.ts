import {CanActivate, ActivatedRoute, ActivatedRouteSnapshot, Router}  from '@angular/router'
import {Injectable} from '@angular/core'
import { EventService } from '../shared/event.service'

//Injectable service
@Injectable()
export class EventRouteActivator implements CanActivate
{
  constructor(private eventService:EventService,private router:Router)
  {

  }

  canActivate(route:ActivatedRouteSnapshot)
  {
      //Id from route
      //This call return a valid result or not
      //double ! operator used to cast value of string into boolean values in jquery
      // + is used type cast into
  const eventExists= !!this.eventService.getEvent(+route.params['id'])

  if(!eventExists)
  this.router.navigate(['/404'])
   return eventExists

  }
}
