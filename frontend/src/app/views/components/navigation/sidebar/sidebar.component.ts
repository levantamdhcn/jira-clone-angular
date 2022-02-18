import { Component, Input } from '@angular/core';
import { SideBarLinks } from 'src/app/config/sidebar';
import { ProjectInterface } from 'src/app/interface/project';
import { SideBarLink } from 'src/app/interface/ui-model/nav-link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() expanded!: boolean;
  project!: ProjectInterface;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 20;
  }

  sideBarLinks!: SideBarLink[];
  constructor() {}

  ngOnInit() {
    this.sideBarLinks = SideBarLinks;
  }
}
