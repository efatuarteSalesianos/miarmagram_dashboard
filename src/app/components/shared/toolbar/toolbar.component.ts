import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  getUsername () {
    return localStorage.getItem('username')
  }

  getAvatar() {
    return localStorage.getItem('avatar')
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  };

}
