import {Component} from '@angular/core'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
@Component({

    templateUrl:'./login.component.html'

    })

    export class LoginComponent
    {
        constructor(private authservice:AuthService ,private router:Router)
        {

        }
        login(formvalues)
        {
            this.authservice.loginUser(formvalues.username,formvalues.password)
            this.router.navigate(['events'])
        }

        cancel()
        {
            this.router.navigate(['events'])
        }
    }