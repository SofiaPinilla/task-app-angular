import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:object;
  constructor(public httpClient:HttpClient) { }

  setUser(user){
    this.user=user;
  }

  register(user:object):Observable<any>{
    return this.httpClient.post('http://localhost:3000/users/register',user);
  }
  login(user:object):Observable<any>{
    return this.httpClient.post('http://localhost:3000/users/login',user);
  }
  getUserInfo(token){
    return this.httpClient.get('http://localhost:3000/users/info',{
      headers:{
        authorization:token
      }
    });
  }
}