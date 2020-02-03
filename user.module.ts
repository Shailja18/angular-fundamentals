//Lazily loaded module
//when our sections is entirely different from app module
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {userRoutes} from './user.routes'
import { ProfileComponent } from './profile.component'
import {LoginComponent} from './login.component'

@NgModule({
        
    imports:[
         //Difference from App module and lazy module
            CommonModule,
            RouterModule.forChild(userRoutes),
            FormsModule,
            ReactiveFormsModule
        ],
   declarations:[ ProfileComponent,
                  LoginComponent],

   providers:[]
//providers are shared among App modules
//but its not true for imports and declaration
    
    
})
export class UserModule
{

}