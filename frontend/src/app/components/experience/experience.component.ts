import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/portfolio.model';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;
  experiences: Experience[] = [];

  constructor(
    private portfolio: PortfolioService,
    private scrollReveal: ScrollRevealService,
  ) {}

  ngOnInit() {
    this.experiences = this.portfolio.getExperiences();
  }

  ngAfterViewInit() {
    this.revealEls.forEach((el) => this.scrollReveal.observe(el.nativeElement));
  }
}
