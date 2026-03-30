import { Injectable } from '@angular/core';
import { Experience, Project, SkillGroup } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getExperiences(): Experience[] {
    return [
      {
        company: '84.51°',
        role: 'Software Engineering Co-op',
        period: 'Jan 2025 – Present',
        location: 'Cincinnati, OH',
        bullets: [
          'Built enterprise Identity and Access Management systems using OAuth2 and Okta, securing access for thousands of internal users.',
          'Orchestrated zero-downtime schema migrations with Mongock and PostgreSQL across Kubernetes (AKS) clusters.',
          'Automated Redis cache eviction on deployment via GitHub Actions CI/CD pipelines, eliminating stale-session bugs.',
          'Achieved 90%+ test coverage across Java and TypeScript services using Jest and JUnit.',
        ],
        tags: ['OAuth2', 'Okta', 'Kubernetes', 'Redis', 'PostgreSQL', 'GitHub Actions'],
      },
      {
        company: 'Purdue Data Mine — Indiana Fever',
        role: 'Data Engineering Analyst',
        period: 'Aug 2024 – Dec 2024',
        location: 'West Lafayette, IN',
        bullets: [
          'Designed Spark-based data pipelines to ingest and transform game and player tracking data for the Indiana Fever.',
          'Wrote SQL analytical queries surfacing performance trends leveraged by the coaching staff.',
          'Presented insights to Fever front-office stakeholders at end-of-semester reviews.',
        ],
        tags: ['Spark', 'SQL', 'Python', 'Sports Analytics'],
      },
      {
        company: 'Umelis Lab — Purdue University',
        role: 'Undergraduate Research Assistant',
        period: 'Jan 2024 – Aug 2024',
        location: 'West Lafayette, IN',
        bullets: [
          'Trained 3D CNNs in PyTorch on volumetric biomedical imaging datasets for anomaly detection tasks.',
          'Preprocessed and augmented large MRI scan datasets, improving model generalization by 12%.',
        ],
        tags: ['PyTorch', 'Python', 'Biomedical Imaging', 'Deep Learning'],
      },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'EEG Data Management Platform',
        description:
          'Led software team to build a full-stack platform for ingesting, storing, and visualizing EEG research data. Designed a serverless AWS architecture handling terabytes of time-series signals.',
        tags: ['Node.js', 'AWS S3', 'DynamoDB', 'Lambda', 'TypeScript'],
        github: 'https://github.com/ianlam',
      },
      {
        title: 'AI Travel Assistant',
        description:
          'Conversational travel planner powered by GPT-4o with persistent itinerary storage in Azure CosmosDB. Supports multi-turn context and real-time flight/hotel suggestions.',
        tags: ['GPT-4o', 'TypeScript', 'Azure CosmosDB', 'Node.js'],
        github: 'https://github.com/ianlam',
      },
      {
        title: 'CDC-PROTECT Data Pipeline',
        description:
          'Built a high-throughput data engineering pipeline for public health datasets using Polars and OpenCV for image-based data extraction and transformation.',
        tags: ['Python', 'Polars', 'OpenCV', 'Data Engineering'],
        github: 'https://github.com/ianlam',
      },
    ];
  }

  getSkills(): SkillGroup[] {
    return [
      {
        category: 'Languages',
        skills: ['Python', 'Java', 'TypeScript', 'C/C++', 'SQL', 'JavaScript'],
      },
      {
        category: 'Frontend',
        skills: ['Angular', 'React', 'HTML/CSS', 'SCSS'],
      },
      {
        category: 'Backend & Cloud',
        skills: ['Node.js', 'Express', 'AWS', 'Azure', 'Docker', 'Kubernetes'],
      },
      {
        category: 'Data & ML',
        skills: ['PyTorch', 'Spark', 'Polars', 'OpenCV', 'PostgreSQL', 'Redis'],
      },
      {
        category: 'Tools',
        skills: ['Git', 'GitHub Actions', 'Terraform', 'Okta', 'OAuth2', 'Jest'],
      },
    ];
  }
}
