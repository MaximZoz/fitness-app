import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatInputPromptComponent } from '../mat-input-prompt/mat-input-prompt.component';
import { PostsService } from './hello.service';

export interface News {
  cataclysmic_type: string;
  description: string;
  id: number;
  location: string;
  src: string;
  title: string;
}
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.component.html',
  styleUrls: ['./hello.component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponentComponent implements AfterViewInit {
  @Input() name: string;
  @Input() news: News[];
  @Output() onClickLocation = new EventEmitter();

  constructor(private postService: PostsService, private dialog: MatDialog) {}
  ngAfterViewInit(): void {
    console.log();
  }
  ngOnChanges() {
    console.log(this.news);
  }
  getLocation(event: MouseEvent) {
    this.onClickLocation.emit(event);
  }

  deleteNews(id: any) {
    this.postService.delete(id).then((el) => {
      console.log('el, ', el);
    });
  }
  showPrompt(el: any): void {
    const dialogRef = this.dialog.open(MatInputPromptComponent, {
      width: '600px',
      height: '500px',
      data: el,
    });
  }
}
