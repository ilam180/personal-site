import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {HeroComponent} from './components/hero/hero.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {IntroComponent} from './components/intro/intro.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, HeroComponent, ExperienceComponent, IntroComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-site';
  company: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.company = params['src'] ?? '';
    })
  }
}
