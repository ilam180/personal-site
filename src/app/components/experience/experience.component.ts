import { Component } from '@angular/core';
import {MatDivider} from '@angular/material/divider';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
    MatDivider
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs = [
    {
      company: '84.51°',
      role: 'Software Engineer Co-op',
      points: [
        'Built enterprise IAM systems using OAuth2 and Okta',
        'Deployed microservices on Kubernetes (AKS)'
      ]
    },
    {
      company: 'Purdue Data Mine',
      role: 'Data Scientist',
      points: [
        'Sports analytics for the Indiana Fever',
        'Built data pipelines using Spark and SQL'
      ]
    }
  ];
}
