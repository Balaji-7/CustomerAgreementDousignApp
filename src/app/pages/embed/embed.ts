import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-embed',
  imports: [CommonModule, MatButtonModule,MatProgressSpinnerModule],
  templateUrl: './embed.html',
  styleUrl: './embed.css',
})
export class Embed {
safeUrl: SafeResourceUrl | null = null;
 loading = true;  
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

   ngOnInit(): void {
    const url = this.route.snapshot.queryParamMap.get('url');
    console.log('Embed URL:', url);
    if (url) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
       setTimeout(() => {
          this.loading = false;
        }, 1500);
    } else {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }
  }
goBack() {
    this.router.navigate(['/dashboard']);
  }

}
