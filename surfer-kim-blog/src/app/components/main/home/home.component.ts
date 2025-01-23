import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  bannerTitle = 'Welcome to surfer-kim\'s blog, where words matter.';
  bannerDescription = 'I\'ll deliver the best stories and ideas on the topics you care about.'
}
