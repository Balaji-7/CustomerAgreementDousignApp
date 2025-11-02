import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Docusign } from '../../services/docusign';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-view-agreement',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './view-agreement.html',
  styleUrl: './view-agreement.css',
})
export class ViewAgreement implements OnInit {
 agreement: any;
  loading = true;
  constructor(private route: ActivatedRoute,private router: Router, private docusign: Docusign,private sanitizer: DomSanitizer) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchAgreement(id);
    } else {
      this.loading = false;
    }
  }

   fetchAgreement(id: string): void {
    this.docusign.getAgreementById(id).subscribe({
      next: (data) => {
        this.agreement = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching agreement:', err);
        this.loading = false;
      },
    });
  }

viewSignedDoc(envelopeId: string): void {
    if (!envelopeId) return;
    this.router.navigate(['/embed'], {
      queryParams: { url: `https://docusign-project.onrender.com/view-signed/${envelopeId}` },
    });
  }


  back() {
    this.router.navigate(['/dashboard']);
  }
}
