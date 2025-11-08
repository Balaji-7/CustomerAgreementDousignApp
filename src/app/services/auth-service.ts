import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = false;
  private userRole: 'admin' | 'user' | null = null;

  constructor(private router: Router) {
    // ✅ Restore login state when app reloads
    const storedLogin = localStorage.getItem('loggedIn');
    const storedRole = localStorage.getItem('role');
    if (storedLogin === 'true' && storedRole) {
      this.isLoggedIn = true;
      this.userRole = storedRole as 'admin' | 'user';
    }
  }

  login(role: 'admin' | 'user', email?: string) {
    this.isLoggedIn = true;
    this.userRole = role;
    localStorage.setItem('role', role);
    localStorage.setItem('loggedIn', 'true');
    if (email) localStorage.setItem('userEmail', email);
    this.router.navigate(['/dashboard']); // or '/'
  }

  logout() {
    this.isLoggedIn = false;
    this.userRole = null;
    localStorage.removeItem('role');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getRole() {
    return this.userRole || (localStorage.getItem('role') as 'admin' | 'user' | null);
  }

  isAuthenticated() {
    return this.isLoggedIn || localStorage.getItem('loggedIn') === 'true';
  }
}
