import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
[x: string]: any;
  usr:any
  act:any
  ps1:any
  act1:any
  ps11:any
  amnt:any


sDetails:any

  constructor(private ds:DataService, private router:Router){
     this.usr=localStorage.getItem("currentUser")
 this.sDetails= new Date()
  }
  deposit(){
    var act=this.act
    var ps1=this.ps1
     var amnt=this.amnt
    this.ds.deposit(act,ps1,amnt).subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{
      alert(result.error.message)
    }
    )
  }
  withdraw(){
    var act1=this.act
    var ps11=this.ps1
     var amnt1=this.amnt
     this.ds.withdraw(act1,ps11,amnt1).subscribe((result:any)=>{
      alert(result.message)
     },
     result=>{
      alert(result.error.message)
    }
     )
    
  }
  deleteAcc(){
    this.act= JSON.parse( localStorage.getItem("currentAcno")||"")
  }

cancelchild(){
  this.act=""
}
ondeleteAcc(event:any){
  this.ds.deleteAcc(event).subscribe((result:any)=>{
    alert(result.message)
    this.router.navigateByUrl("")
  })
  
}
}


