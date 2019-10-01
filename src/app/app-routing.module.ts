import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"list-users",
    pathMatch:"full"
  },
  {
    path:"list-users",
    component:ListUsersComponent
  },
  {
    path:"create-user",
    component:CreateUserComponent
  },
  {
    path:"edit-user",
    component:EditUserComponent,
    data:["user"]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
