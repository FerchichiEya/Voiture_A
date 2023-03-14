import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
//import {SelectionModel} from "@angular/cdk/collections";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allUsers!: User[];
  initialSelection = [];
  allowMultiSelect = true;
  //selection = new SelectionModel<User>(this.allowMultiSelect, this.initialSelection);

  constructor(private userService: UserService,
              public authService: AuthService) {
  }
  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(){
    this.userService.findAllUsers().subscribe((users)=>{
      this.allUsers = users;console.log(users);
      }
    )
  }
 


  
/*   deleteSelectedUsers(){
    this.selection.selected.forEach((user: User)=>{
      this.deleteUser(user.user_id);
    });
  }
  displayedColumns: string[] = ['select', 'username', 'enabled', 'roles', 'actions'];

  /** Whether the number of selected elements matches the total number of rows. */
/*   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.allUsers!.length;
    return numSelected == numRows;
  }

  toggleAllRows() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.allUsers!.forEach(row => this.selection.select(row));
  } */
 
  
/*   deleteSelectedUsers(){
    this.selection.selected.forEach((user: User)=>{
      this.deleteUser(user.user_id);
    });
  } */
  
}
