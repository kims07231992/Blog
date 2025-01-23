import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Project } from '../../../../models/project';

@Component({
  selector: 'app-project-card',
  imports: [MatCardModule, MatButtonModule, MatChipsModule, NgFor, NgIf],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent { 
  @Input({ required: true }) project: Project | undefined;

    constructor() { }
}
