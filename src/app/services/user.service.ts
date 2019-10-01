import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment"
import { CreateUserDto } from '../DTO/create-user.dto';
import { HttpHepler } from '../helpers/httpHelper.class';
import { User } from '../models/User.interface';
import { EditUserDto } from '../DTO/edit-user.dto';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public editedUser:User
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(environment.base_url + "user")
  }

  createUser(user:CreateUserDto) {
    return this.httpClient.post(environment.base_url+"user"
                              ,JSON.stringify(user)
                              ,{headers:HttpHepler.getHttpHeaders()})
  }
  editeUser(user:EditUserDto) {
    return this.httpClient.put(environment.base_url+"user/"+this.editedUser.id
                              ,JSON.stringify(user)
                              ,{headers:HttpHepler.getHttpHeaders()})
  }
  deleteUser(user:User) {
    return this.httpClient.delete(environment.base_url+"user/"+user.id)
  }

}
