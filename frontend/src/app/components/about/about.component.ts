import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  facts = [
    { label: 'University', value: 'Purdue University' },
    { label: 'Major', value: 'Computer Science — AI' },
    { label: 'GPA', value: '3.58' },
    { label: 'Graduating', value: 'May 2027' },
    { label: 'Based in', value: 'Cincinnati, OH' },
  ];

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit() {
    this.revealEls.forEach((el) => this.scrollReveal.observe(el.nativeElement));
  }
}
