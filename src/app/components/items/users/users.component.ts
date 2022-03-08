import { UserService } from './../../../services/user.service';
import { UserResponse } from './../../../models/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'username', 'email', 'birthDate', 'followers', 'privateAccount', 'rol', 'actions'];
  usuarios!: UserResponse[];
  dataSource = new MatTableDataSource(this.usuarios);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listarUsuarios().subscribe(res => {
      this.usuarios = res;
      this.dataSource = new MatTableDataSource(this.usuarios);
    });
  }

  giveAdmin(username: string) {
    this.userService.giveAdmin(username).subscribe(res => {
      console.log(res);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
