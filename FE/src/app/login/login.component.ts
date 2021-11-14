import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = '';
  pass:string ='';

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(user:string, pass:string){
    if(user==="test" && pass === "test"){
      this.router.navigate(['todos'])
    } else{
      alert("User is not registered")
    }
  }

}
