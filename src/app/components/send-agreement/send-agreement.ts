import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Docusign } from '../../services/docusign';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-agreement',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './send-agreement.html',
  styleUrl: './send-agreement.css',
})
export class SendAgreement {
  form = { name: '', email: '', company: '' };
  loading = false;

  constructor(private docusignService: Docusign, private snack: MatSnackBar,private router:Router) {}

  sendAgreement() {
    if (!this.form.name || !this.form.email || !this.form.company) {
      this.snack.open('Please fill all fields', 'OK', { duration: 2000 });
      return;
    }

    this.loading = true;

    this.docusignService.sendAgreement(this.form).subscribe({
      next: (res) => {
        try {
          // handle both string and object responses
          const data = typeof res === 'string' ? JSON.parse(res) : res;

          if (data.url) {
            // open DocuSign signing ceremony in a new tab
            // window.open(data.url, '_blank');
            this.router.navigate(['/embed'], { queryParams: { url: data.url } });

          }

          this.snack.open('Agreement sent successfully!', 'OK', { duration: 2000 });
          // setTimeout(() => {
          //   this.router.navigate(['/']);
          // }, 1500);
        } catch (e) {
          console.error('Invalid response format', e);
          this.snack.open('Unexpected response from server', 'OK', { duration: 2000 });
        } finally {
          this.loading = false;
        }
      },
      error: (err) => {
        console.error('Error sending agreement', err);
        this.snack.open('Failed to send agreement. Try again.', 'OK', { duration: 2000 });
        this.loading = false;
      },
    });
  }
}
