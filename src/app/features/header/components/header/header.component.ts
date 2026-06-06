import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDark = false;
  @HostBinding('class.header--hidden') hidden = false;
  private lastScrollY = 0;

  ngOnInit(): void {
    this.isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY;
    if (scrollY > this.lastScrollY && scrollY > 60) {
      this.hidden = true;
    } else if (scrollY < this.lastScrollY && !document.body.classList.contains('suppress-header')) {
      this.hidden = false;
    }
    this.lastScrollY = scrollY;
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : '');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

}
