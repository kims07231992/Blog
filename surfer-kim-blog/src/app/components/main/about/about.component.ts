import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { Career } from '../../../models/career';
import { AboutService } from '../../../services/main/about/about.service';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-about',
  imports: [
    DatePipe,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    BannerComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  bannerTitle = 'Get In Touch';
  bannerDescription = 'The best is yet to come.'
  profileName = 'Jason Kim';
  profileTitle = 'Future Pro Surfer'
  profileLocation = 'Los Angeles Metropolitan Area';
  experiences: Career[];
  educations: Career[];

  aboutService: AboutService = inject(AboutService);

  constructor() {
    this.experiences = this.aboutService.getExperiences();
    this.educations = this.aboutService.getEducations();
  }
 }
