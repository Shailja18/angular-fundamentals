//Encapsulate all display logic for single events
import {Component ,Input,Output,EventEmitter} from '@angular/core'
import {IEvent} from './shared/event.module'

@Component({

    selector:'event-thumbnail',
    template:
    `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div>Time :{{event?.time}}</div>

    <div>Price: \${{event?.price}} </div>
    <div *ngIf="event?.location">
    <span> Location: {{event?.location?.address}}</span>
    <span class="pad-left">{{event.location.city}} {{event.location.country}}</span>
   </div>
   <div *ngIf="event?.onlineUrl">
    Online URL :{{event.onlineUrl}}
   </div>
   `,
   styles:
   [
       ` thumbnail{ min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color:#bbb;}
       `
   ]
})

//This one is child component
export class EventThumbnailComponent
{
    //Decorater Input tell that this event is passed from other component that is parent component
 @Input() event:IEvent[]

//Adding output decorater to child component 
//we have decorated our click property with output decorater    and we are setting it to new emitter. As output parameter are used
/* to convey some event that has occured.
@Output() eventClick=new EventEmitter()

 handleClickMe()
 {
     this.eventClick.emit('foo')
 }

 */
someProperty:any ="some value"

  logFoo()
  {
      console.log('foo')
  }
}