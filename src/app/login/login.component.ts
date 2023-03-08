import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//accno=""
accno:any
psw:any
  
    // string interpolation
  data="Your Perfect Banking Partner"
    // property binding[property_name]="data1"
  data1="Enter Your Acc Number"
userData:any={
  1000:{username:"arun",acnno:1000,password:"abc123",balance:0},
  1001:{username:"amal",acnno:1001,password:"abc123",balance:0},
  1003:{username:"aswin",acnno:1002,password:"abc123",balance:0},
  1004:{username:"adarsh",acnno:1000,password:"abc123",balance:0},

}
constructor(private router:Router,private ds:DataService){}


login(){
  // alert('login worked')
  var acnum=this.accno
  var psw=this.psw
  var userData=this.ds.userData
  if(acnum in userData){
    if(psw==userData[acnum]["password"]){
      alert("login success")
      //redirection
    
    this.router.navigateByUrl("dashboard")
    }
    else{
      alert('incorrect password')
    }

  }
  else{
    alert('inncorect accnum')
  }

}
}

