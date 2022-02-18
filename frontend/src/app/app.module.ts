import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLeftComponent } from './views/components/navbar-left/navbar-left.component';
import { NavigationComponent } from './views/components/navigation/navigation.component';
import { NZ_JIRA_ICONS } from './config/icons';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { ProjectComponent } from './views/pages/project/project.component';
import { SvgDefinitionsComponent } from './views/shared/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './views/shared/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavbarLeftComponent,
    SidebarComponent,
    ProjectComponent,
    SvgDefinitionsComponent,
    SvgIconComponent
  ],
  imports: [BrowserModule, NzToolTipModule, NzIconModule.forRoot(NZ_JIRA_ICONS), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
