import {Component, Input} from '@angular/core'
import { ISession } from '../shared/event.module'

@Component(
    {
        selector:'session-list',
        templateUrl: './session-list.component.html'
    }
)

export class SessionListComponent
{
    //Here sessions value is comming as Input from other component that is beinmg used in html to display
    @Input()sessions:ISession[]
}