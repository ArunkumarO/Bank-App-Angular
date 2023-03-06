import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//accno=""
  accno:any
  pass:any
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
// methods
// Event binding(eventname)="method()"
login(){
  // alert('login worked')
  var acnum=this.accno
  var psw=this.pass
  var userData=this.userData
  if(acnum in userData){
    if(psw==userData[acnum]["password"]){
      alert("login success")

    }
    else{
      alert('incorrect password')
    }

  }
  else{
    alert('inncorect accnum')
  }
}
// $event binding(ebventname)="method($event:type)"
acnoChange(event:any){
this.accno=event.target.value;
  

}
passWord(event:any){
this.pass=event.target.value;
console.log(this.pass);

}


}
