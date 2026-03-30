import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillGroup } from '../../models/portfolio.model';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;
  skillGroups: SkillGroup[] = [];

  constructor(
    private portfolio: PortfolioService,
    private scrollReveal: ScrollRevealService,
  ) {}

  ngOnInit() {
    this.skillGroups = this.portfolio.getSkills();
  }

  ngAfterViewInit() {
    this.revealEls.forEach((el) => this.scrollReveal.observe(el.nativeElement));
  }
}
