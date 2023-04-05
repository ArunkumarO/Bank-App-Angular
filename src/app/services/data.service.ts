import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//create header globaly
const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})


export class DataService {

   
  

  //currentuser to store  user name 
     currentUser:any
     currentAcno:any
userData:any
  constructor(private http:HttpClient) {}



  getToken(){
    //accees token
    const token=JSON.parse( localStorage.getItem("token")||"")
    //GENERATE HEADER
    let headers=new HttpHeaders()
    //check token acces or not
    if(token){
     option.headers= headers.append('acces_token',token)
    }
    return option
  }

  register(act:any,usr:any,ps1:any){
    const data={act,usr,ps1}
  return  this.http.post('http://localhost:3000/register',data)
  }
  login(act:any,ps1:any){
    const data={act,ps1}
    return this.http.post('http://localhost:3000/login',data)

  

    }
    deposit(act:any,ps1:any,amnt:any){
    
      const data={act,ps1,amnt}
      return this.http.post('http://localhost:3000/deposit',data,this.getToken())


    }
    withdraw(act:any,ps1:any,amnt:any){
      const data={act,ps1,amnt}
      return this.http.post('http://localhost:3000/withdraw',data,this.getToken())

    }
  getTransaction(act:any){
const data ={act}
return this.http.post('http://localhost:3000/getTransaction',data,this.getToken())

  }

  deleteAcc(act:any){
return this.http.delete('http://localhost:3000/delete/'+act,this.getToken())
  }
}

