import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/portfolio.model';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;
  projects: Project[] = [];

  constructor(
    private portfolio: PortfolioService,
    private scrollReveal: ScrollRevealService,
  ) {}

  ngOnInit() {
    this.projects = this.portfolio.getProjects();
  }

  ngAfterViewInit() {
    this.revealEls.forEach((el) => this.scrollReveal.observe(el.nativeElement));
  }
}
