import {Injectable} from '@angular/core'
import {IUser} from './user.model'
@Injectable()
export class AuthService
{
    currentUser:IUser
    loginUser(username:string ,password:string)
    {
        this.currentUser={
            id:1,
            userName:username,
            firstName:'John',
            lastName:'Papa',
            password:password
        }
    }

    isAuthenticated()
    {
        return !!this.currentUser;
    }

    //to update current user value
    updateCurrentUser(firstName:string ,lastName:string)
    {
        this.currentUser.firstName=firstName
        this.currentUser.lastName=lastName
    }

}