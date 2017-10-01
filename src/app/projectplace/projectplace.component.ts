import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectplace',
  templateUrl: './projectplace.component.html',
  styleUrls: ['./projectplace.component.css']
})
export class ProjectplaceComponent {
  projects: Project[] = [
    new Project('Galactic Age Calculator', 'HTML/CSS,JavaScript/ES6', 'calculates age based on planer', 1),
    new Project('Team Tracker', 'HTML/CSS, Java, RESTFUL Webservices', 'trackes team member details using CRUD', 2),
    new Project('Better Doctor API', 'testthree', '', 3),
    new Project('WildLife Safari', '', '', 4)
  ];

  constructor(private router: Router ){};

  goToDetailPage(clickedProject: Project) {
     this.router.navigate(['projects', clickedProject.id]);
   };


}
