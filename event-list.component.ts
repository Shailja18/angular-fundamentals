import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

//GLobally declaring
//declare let toastr
//Parent Component
//Decorater
@Component(
    {
        selector: 'event-list',
        template:   `<div>
        <h1>Upcomming Angular Events</h1>
        <hr/>
        <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)"   [event]="event" ></event-thumbnail>
        </div>
        </div>`
    }
)
export class EventListComponent implements OnInit
{

    events:any
    //Dependency Injection of service
    //After injection we can use it in full class
    //We can inject 3rd library service also here
    constructor(private eventservice:EventService,private toastr:ToastrService, private route:ActivatedRoute)
    {
       
    }
    //Components have lifecycle hook
    //ngOnit() this method is called when component first loaded
    ngOnInit()
    {
        //getEvents is going to return the observable
        //get the data from observable only by subscribing to it
        //we are going to set only when data is going to received
       // this.eventservice.getEvents().subscribe(events => {this.events=events});
    
       //this events matches to the events on the route
       this.events=this.route.snapshot.data['events']
    }
     

    handleThumbnailClick(eventName)
    {
        //toastr is available gloabally but ts is unaware about it
        this.toastr.success(eventName)
    }
}
    
   
  /*Only pass single value through emitter
   handleEventClicked(data)
   {
    console.log('received:',data)
   }
   */
