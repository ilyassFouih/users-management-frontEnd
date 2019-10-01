import { Component, OnInit } from '@angular/core';
import { EditUserDto } from 'src/app/DTO/edit-user.dto';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User.interface';
import { Response, Status } from 'src/app/models/response.interface';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUserDto: EditUserDto = new EditUserDto()

  constructor(private userService: UserService,
    private router:Router,
    private errorService:ErrorService) { }

  ngOnInit() {
    this.getSelectedUser()
  }

  _editUserDto() {
    this.userService.editeUser(this.editUserDto)
    .toPromise()
    .then((resp:Response)=>{
      if(resp.status==Status.SUCCESS){
       this.errorService.createSuccess(resp.message)
       this.userService.editedUser= resp.results
       this.router.navigate(["/list-users"])
      }else{
        this.errorService.createError(resp.message)
      }
    })
    .catch(error=>{
      console.error(error)
      this.errorService.createError(error.message)
    })
  }

  getSelectedUser() {
    let selectedUser:User = this.userService.editedUser
    if (selectedUser) {
      let { lastname, firstName, balance, age } = selectedUser
      this.editUserDto = { lastname, firstName, balance, age }
      console.log(this.editUserDto)
    }else 
    this.router.navigateByUrl("/create-user")
  }

}
