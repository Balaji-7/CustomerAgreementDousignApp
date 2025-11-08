import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './services/auth-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatToolbarModule, MatButtonModule, RouterModule,MatIconModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  constructor(public auth: AuthService) {
  }
  protected readonly title = signal('Customer Agreement Management System');
   menuOpen = false;
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logout() {
    this.auth.logout();
  }
}
