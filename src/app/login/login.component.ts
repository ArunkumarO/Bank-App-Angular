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
act:any
ps1:any
  
    // string interpolation
  data="Your Perfect Banking Partner"
    // property binding[property_name]="data1"
  data1="Enter Your Acc Number"

constructor(private router:Router,private ds:DataService){}


login(){
  // alert('login worked')
  var act=this.act
  var ps1=this.ps1
this.ds.login(act,ps1).subscribe((result:any)=>{

  localStorage.setItem("currentUser",result.currentUser)
  localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
  localStorage.setItem("token", JSON.stringify(result.token))

  alert(result.message)
  console.log(result);
  
  this.router.navigateByUrl("dashboard")
},
result=>{
  alert(result.error.message)

})


}
}



