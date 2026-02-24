import { computed, Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser = signal<User | null>(null);
  currentUser = this._currentUser.asReadonly();

  isLoggedIn = computed(() => !!this.currentUser());

  login(user: User) {
    this._currentUser.set(user);
  }

  logout() {
    this._currentUser.set(null);
  }
}
