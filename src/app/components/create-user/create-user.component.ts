import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.interface';
import { CreateUserDto } from 'src/app/DTO/create-user.dto';
import { UserService } from 'src/app/services/user.service';
import { Response, Status } from 'src/app/models/response.interface';
import { ErrorService } from 'src/app/services/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user :CreateUserDto = new CreateUserDto()

  constructor(private userService: UserService,
    private errorService: ErrorService,
    private router:Router) { }

  ngOnInit() {
  }

  _createUser() {
    console.log(this.user)
    this.userService.createUser(this.user)
    .toPromise()
      .then((res: Response) => {
        console.log(res)
        if (res.status == Status.SUCCESS){
          this.errorService.createSuccess("user added successfully !")
          this.router.navigate(["/list-users"])
        }
        else
          this.errorService.createError(res.message)
      })
      .catch(error => {
        console.error(error)
        this.errorService.createError(error.message)
      })
  }

}
