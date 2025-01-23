import { Routes } from '@angular/router';
import { AboutComponent } from './components/main/about/about.component';
import { HomeComponent } from './components/main/home/home.component';
import { ProjectComponent } from './components/main/project/project.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'about', component: AboutComponent },
];
