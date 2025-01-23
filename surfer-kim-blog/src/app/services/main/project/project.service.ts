import { Injectable } from '@angular/core';
import { Project } from '../../../models/project';

@Injectable({
    providedIn: 'root',
  })
export class ProjectService {
  private projects: Project[] | undefined;

  constructor() {

  }

  getProjects() {
    if (this.projects == null) {
      this.projects = [
        {
          id: 0,
          title: 'surfer-kim Blog',
          location: 'Personal Project',
          summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
          tags: ['2025', 'Angular'],
      },
        {
            id: 1,
            title: 'Meta Quest Casting',
            location: 'Meta',
            summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            tags: ['2024', 'Kotlin', 'C++', 'React', 'React Native', 'Hack'],
            projectUrl: 'https://www.meta.com/help/quest/articles/in-vr-experiences/oculus-features/cast-with-quest/'
        },
        {
          id: 2,
          title: 'Amazon Style',
          location: 'Amazon',
          summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
          tags: ['2020 - 2023', 'Kotlin', 'React', '.NET', 'Python', 'AWS'],
          projectUrl: 'https://www.aboutamazon.com/news/retail/amazon-reimagines-in-store-shopping-with-amazon-style'
        },
        {
          id: 3,
          title: 'iHerb Multi Order On-Hold',
          location: 'IHerb, LLC',
          summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
          tags: ['2020', '.NET'],
        },
        {
          id: 4,
          title: 'Sentiment Analysis of Korean Teenagers’ Language',
          location: 'University of Southern California',
          summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
          tags: ['2017', 'Python', '.NET', 'Power BI'],
          projectUrl: 'https://link.springer.com/chapter/10.1007/978-981-13-3648-5_63'
        },
      ];
    }
    return this.projects;
  }
} 
