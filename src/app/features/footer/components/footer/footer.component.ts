import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() postCount = 0;
  @Input() projectCount = 0;

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      document.body.classList.add('suppress-header');
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => document.body.classList.remove('suppress-header'), 800);
    }
  }

  scrollToTop(): void {
    document.body.classList.add('suppress-header');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => document.body.classList.remove('suppress-header'), 800);
  }

}
