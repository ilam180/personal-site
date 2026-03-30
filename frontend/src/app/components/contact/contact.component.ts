import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit() {
    this.revealEls.forEach((el) => this.scrollReveal.observe(el.nativeElement));
  }
}
