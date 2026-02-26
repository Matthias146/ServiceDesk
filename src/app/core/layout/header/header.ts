import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private authService = inject(AuthService);
  private router = inject(Router);
  userName = this.authService.currentUser()?.name || 'Guest';
  userRole = this.authService.currentUser()?.role || 'N/A';

  isLoggedIn = computed(() => this.authService.isLoggedIn());

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
