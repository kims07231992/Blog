import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderTopComponent } from './components/shared/header-top/header-top.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
