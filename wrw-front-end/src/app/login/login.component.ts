// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  submitted = false;

  // constructor(private router: Router) { }
  constructor(private userService: UserService) {}
username: string;
password: string;
  ngOnInit() {
  }
  // login(): void {
  //   if (this.username === 'admin' && this.password === 'admin') {
  //    this.router.navigate(['user']);
  //   } else {
  //     alert('Invalid credentials');
  //   }

newUser(): void {
  this.submitted = false;
  this.user = new User();
}

save() {
  this.userService.saveUser(this.user)
    .subscribe(
      data => {
        console.log(data);
        this.submitted = true;
      }
    )
}
  }

