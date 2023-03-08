import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  uname:any
  psw:any
  acno:any
  constructor(private ds:DataService){

  }

  register(){
    var uname=this.uname
    var psw=this.psw
    var acno=this.acno

    const result =this.ds.register(acno,uname,psw)
    if(result){
      alert("user registerd succesfully")

    }
    else{
      alert("user alredy exist")
    }

  }
}
