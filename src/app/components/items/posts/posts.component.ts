import { PostResponse } from './../../../models/interfaces/post.interface';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  displayedColumns: string[] = ['scaledFileUrl', 'title', 'description', 'username', 'avatar', 'actions'];

  publicaciones!: PostResponse[];
  dataSource = new MatTableDataSource(this.publicaciones);

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.listarPosts().subscribe(res => {
      this.publicaciones = res;
      this.dataSource = new MatTableDataSource(this.publicaciones);
      console.log(this.publicaciones);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
