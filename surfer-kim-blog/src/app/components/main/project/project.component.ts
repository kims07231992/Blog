import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/main/project/project.service';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-project',
  imports: [BannerComponent, ProjectCardComponent, NgIf],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
    bannerTitle = 'Ideas and perspectives you won’t find anywhere else.';
    bannerDescription = 'I deliver the best stories and ideas on the topics you care about most straight to your life.'
    projects: Project[];

    projectService: ProjectService = inject(ProjectService);
  
    constructor() {
      this.projects = this.projectService.getProjects();
    }
 }
