import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faInstagram,
      faLinkedin,
      faYoutube,
    );
  }
}
