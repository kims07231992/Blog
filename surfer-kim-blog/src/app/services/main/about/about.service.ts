import { Injectable } from '@angular/core';
import { Career } from '../../../models/career';

@Injectable({
    providedIn: 'root',
  })
export class AboutService {
  private experiences: Career[] | undefined;
  private educations: Career[] | undefined;

  constructor() {

  }

  getExperiences() {
    if (this.experiences == null) {
      this.experiences = [
        {
            id: 0,
            name: 'iHerb, LLC',
            title: 'Senior Software Development Engineer',
            location: 'Los Angeles Metropolitan Area',
            imageUrl: '/images/about/experiences/iHerb.jpeg',
            fromDate: new Date('1/1/25'),
            toDate: undefined,
          },
        {
            id: 1,
            name: 'Meta',
            title: 'Software Development Engineer',
            location: 'Los Angeles Metropolitan Area',
            imageUrl: '/images/about/experiences/Meta.jpeg',
            fromDate: new Date('1/1/24'),
            toDate: new Date('10/1/24')
        },
        {
          id: 2,
          name: 'Amazon',
          title: 'Software Development Engineer',
          location: 'Los Angeles Metropolitan Area',
          imageUrl: '/images/about/experiences/Amazon.png',
          fromDate: new Date('11/1/20'),
          toDate: new Date('4/1/23')
        },
        {
          id: 3,
          name: 'iHerb, LLC',
          title: 'Software Development Engineer',
          location: 'Los Angeles Metropolitan Area',
          imageUrl: '/images/about/experiences/iHerb.jpeg',
          fromDate: new Date('1/1/19'),
          toDate: new Date('10/1/20')
        },
        {
          id: 4,
          name: 'University of Southern California',
          title: 'Research Assistant',
          imageUrl: '/images/about/experiences/USC.png',
          location: 'Los Angeles Metropolitan Area',
          fromDate: new Date('6/1/17'),
          toDate: new Date('8/1/17')
        },
        {
          id: 5,
          name: 'Hyundai Mobis',
          title: 'Software Developer Internship',
          location: 'Montgomery, AL',
          imageUrl: '/images/about/experiences/Hyundai_Mobis.jpg',
          fromDate: new Date('1/1/16'),
          toDate: new Date('11/1/16')
        },
        {
          id: 6,
          name: 'Republic of Korea Army',
          title: 'Squad Leader',
          location: 'Gyeonggi-do, South Korea',
          imageUrl: '/images/about/experiences/Republic_Of_Korea_Army.png',
          fromDate: new Date('2/1/12'),
          toDate: new Date('11/1/13')
        }
      ];
    }
    return this.experiences;
  }

  getEducations() {
    if (this.educations == null) {
      this.educations = [
        {
          id: 0,
          name: 'Georgia Institute of Technology',
          title: 'Master of Science, Computer Science',
          location: 'Specialization in Computing Systems',
          imageUrl: '/images/about/educations/GT.png',
          fromDate: new Date('8/1/19'),
          toDate: new Date('8/1/23')
        },
        {
          id: 1,
          name: 'Dongguk University',
          title: 'Bachelor\'s degree, Computer Science and Engineering',
          location: '',
          imageUrl: '/images/about/educations/DGU.png',
          fromDate: new Date('3/1/11'),
          toDate: new Date('2/1/18')
        }
      ];
    }
    return this.educations;
  }
} 
