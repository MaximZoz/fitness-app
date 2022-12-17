import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.component.html',
  styleUrls: ['./hello.component.component.scss'],
})
export class HelloComponentComponent implements OnInit {
  @Input() name: string;

  constructor(private news: PostsService) {}

  ngOnInit() {
    this.news.getAll().subscribe((el) => {
      console.log('🚀  el', el);
    });
  }
}
