import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from 'store';
import { AuthService } from '../auth/shared/services/auth/auth.service';
import { User } from 'src/interfaces/user.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User> | undefined;
  subscription$: Subscription | undefined;
  constructor(private store: Store, private authService: AuthService) {}
  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription$ = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }
}
