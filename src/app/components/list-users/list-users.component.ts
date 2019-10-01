import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ErrorService } from 'src/app/services/error.service';
import { Response ,Status } from "src/app/models/response.interface"
import { User } from 'src/app/models/User.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = []
  constructor(private usersService: UserService,
    private errorService: ErrorService,
    private router:Router) { }

  ngOnInit() {
    this._getUsers()
  }

  editUser(user:User){
    this.router.navigate(["/edit-user"])
    this.usersService.editedUser=user
  }
  _deleteUser(user:User){
    this.usersService.deleteUser(user)
    .toPromise()
    .then((resp:Response)=>{
      if(resp.status==Status.SUCCESS){
       this.users= this.users.filter(item=>item.id!=user.id)
        this.errorService.createSuccess("removed user with success")
      }else{
        this.errorService.createError(resp.message)
      }
    })
  .catch(error=>{
    console.error(error)
    this.errorService.createError(error.message)
  })
  
  }

  _getUsers() {
    this.usersService.getUsers()
      .toPromise()
      .then((resp: Response) => {
        console.log(resp)
        if (resp.status == Status.SUCCESS) {
          this.users = resp.results
        } else
          this.errorService.createError(resp.message)
      })
      .catch(error => {
        console.error(error)
        this.errorService.createError(error.message)
      })
  }
}
