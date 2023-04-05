import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:[ './register.component.css']
})
export class RegisterComponent {
  usr:any
  ps1:any
  act:any
  
  constructor(private ds:DataService ,private router:Router,private fb:FormBuilder){}
  // model for regisrwe form
  registerForm=this.fb.group({
    act:[''],usr:[''],ps1:['']
  
  })
  
register(){
  var act=this.registerForm.value.act
  var usr=this.registerForm.value.usr
  var ps1=this.registerForm.value.ps1



    this.ds.register(act,usr,ps1).subscribe((result:any)=>{
      alert(result.message)
    //  console.log(result);
      
      this.router.navigateByUrl("")

    },
    result=>{
      alert(result.error.message)
      this.router.navigateByUrl("")
    }
    )
  
  }
}
