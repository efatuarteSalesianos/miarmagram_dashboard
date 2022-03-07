import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
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
