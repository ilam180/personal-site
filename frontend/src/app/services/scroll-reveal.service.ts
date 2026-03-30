import { Injectable, NgZone } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private observer: IntersectionObserver;

  constructor(private zone: NgZone) {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.zone.run(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              this.observer.unobserve(entry.target);
            }
          });
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
  }

  observe(el: Element): void {
    this.observer.observe(el);
  }
}
