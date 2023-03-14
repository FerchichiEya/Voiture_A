import { Component, Input, OnInit } from '@angular/core';
import { Role } from '../model/role.model';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {
  @Input()
  newUser = new User();
  constructor(private userService: UserService) {
  }
  createUser(user: User){
    
    this.userService.createUser(user).subscribe((k)=>{
     
      let role = new Role(2,"USER");
      this.userService.addRoleToUser(user.username, role).subscribe(); 
    })
  }

}