import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //currentuser to store  user name 
     currentUser:any
  userData:any={
    1000:{username:"arun",acnno:1000,password:"abc123",balance:0},
    1001:{username:"amal",acnno:1001,password:"abc123",balance:0},
    1003:{username:"aswin",acnno:1002,password:"abc123",balance:0},
    1004:{username:"adarsh",acnno:1000,password:"abc123",balance:0},
  
  }
  register(act:any,usr:any,ps1:any){
    var userData=this.userData
    if(act in userData){
      return false
    }
    else{
      userData[act]={username:usr,act,password:ps1,balance:0}
      console.log(userData);
      
      return true
    }
    
  }
  login(act:any,ps1:any){
    var userData=this.userData
    if(act in userData){
      if(ps1==userData[act]["password"]){
        this.currentUser=userData[act]["username"]

        return  true
      }
      else{
        return false
      }
    }

      else{
        return false
      }

    }
 
  constructor() {}
}

