import { Component,  } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AuthService} from './../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService],
})
export class LoginComponent  {
  loginForm= new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
  constructor(private authSvc:AuthService, private router: Router) { }

  async onGoogleLogin(){
    try{}
    catch(error){console.log(error)}
    this.authSvc.loginGoogle();
  }
  
  async onLogin(){
    const{email, password}=this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      this.authSvc.login(email, password);
      if(user&& user.user.emailVerified){
        this.router.navigate(['/home']);
      }else if(user){
        this.router.navigate(['/verification-email']);
      }
    }
    catch(error){console.log(error)};

  }
}
