import { Component, OnInit,Output,EventEmitter} from '@angular/core'
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { ISession } from '../shared/event.module'


@Component(
    {
        selector: 'create-session' ,
        templateUrl: './create-session.component.html'
    }
)

export class CreateSessionComponent implements OnInit
{
  @Output() saveNewSession=new EventEmitter()
  @Output() cancelAddSession=new EventEmitter()
  newSessionForm:FormGroup
  name:FormControl
  duration:FormControl
  presenter:FormControl
  level:FormControl
  abstract:FormControl
 ngOnInit()
 {

     this.name=new FormControl('',Validators.required)
     this.presenter=new FormControl('',Validators.required)
     this.duration=new FormControl('',Validators.required)
     this.level=new FormControl('',Validators.required)
     this.abstract=new FormControl('',[Validators.required,Validators.maxLength(400),this.restrictedWords])

     this.newSessionForm =new FormGroup(
         {
             name:this.name,
             presenter:this.presenter,
             duration:this.duration,
             level:this.level,
             abstract:this.abstract,

         }
     )
 }

 //Custom Validators for class
 private restrictedWords(control:FormControl):{[key: string]: any}
 {
     return control.value.includes('foo')
     ?{'restrictedWords' :'foo'}
     :null
 }
    saveSession(formvalues)
    {
        let session:ISession={
            id:undefined,
            name: formvalues.name,
            duration : +formvalues.duration,
            level:formvalues.level,
            presenter:formvalues.presenter,
            abstract:formvalues.abstract,
            voters: []
        }
       this.saveNewSession.emit(session)
    }

    cancel()
    {
        this.cancelAddSession.emit()
    }
}