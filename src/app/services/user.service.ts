import { Observable } from 'rxjs';
import { Role } from '../model/role.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }


  apiUrl="http://localhost:8016/users/";



  createUser(user :User):Observable<any>{
    return this.http.post(this.apiUrl, user);
  }
    findAllUsers():Observable<User[]>{
      return this.http.get<User[]>(`${this.apiUrl}all`)
    }
  
   

    
    addRoleToUser(username:String,role: Role){
      return this.http.put(this.apiUrl+username,role);
    }
    
  }
