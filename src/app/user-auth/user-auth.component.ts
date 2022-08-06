import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
 
 datas=[];
  constructor(private router:Router, private http:HttpClient) {
    this.http.get('assets/json/users.json').subscribe((response)=>{
       for(let data in [response]){
        console.log();
      }
    })
   }

  ngOnInit(): void {
    
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl(''),
  });
  onLogin() {
    console.log(this.profileForm.value);
    console.log(this.datas);

  }
}
