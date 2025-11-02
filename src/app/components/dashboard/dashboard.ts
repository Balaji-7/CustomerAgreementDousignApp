import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import {Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Docusign } from '../../services/docusign';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,MatButtonModule, MatTableModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  agreements: any[] = [];
  displayedColumns = ['name', 'email', 'company', 'status', 'actions'];

  constructor(private docusignService: Docusign, private router: Router) {}

  ngOnInit() {
    this.loadAgreements();
  }
  loadAgreements() {
    this.docusignService.getAllAgreements().subscribe({
      next: (res: any[]) => {
        this.agreements = res;
      },
      error: (err) => console.error('Error loading agreements', err),
    });
  }

  viewAgreement(envelopeId: string) {
   if (!envelopeId) {
    console.error('Invalid agreement ID:', envelopeId);
    return;
  }
     this.router.navigate(['/view', envelopeId]);

  }

  sendNew() {
    this.router.navigate(['/send']);
  }

  viewSignedDoc(envelopeId: string) {
  // window.open(`http://localhost:8000/view-signed/${envelopeId}`, '_blank');
  this.router.navigate(['/embed'], { queryParams: { url: `https://docusign-project.onrender.com/view-signed/${envelopeId}` } });
}

downloadSignedDoc(envelopeId: string) {
  window.open(`https://docusign-project.onrender.com/download-signed/${envelopeId}`, '_blank');
}
}
