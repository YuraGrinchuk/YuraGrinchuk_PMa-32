import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  loginUser(e){
  	e.preventDefault();
  	console.log(e);
  	var username =e.target.elements[0].value;
  	var password =e.target.elements[1].value;
  	if (username == 'root' && password == 'root')
  		this.router.navigate(['dashboard']);
  	if (username !== 'root' && password !== 'root')
  		this.router.navigate(['']);

  }

}
