import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_JIRA_ICONS } from './config/icons';
import { ProjectComponent } from './views/pages/project/project.component';
import { SvgDefinitionsComponent } from './views/shared/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './views/shared/svg-icon/svg-icon.component';
import { NavbarLeftComponent } from './views/components/navigation/navbar-left/navbar-left.component';
import { SidebarComponent } from './views/components/navigation/sidebar/sidebar.component';
import { NavigationComponent } from './views/components/navigation/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLeftComponent,
    SidebarComponent,
    NavigationComponent,
    ProjectComponent,
    SvgDefinitionsComponent,
    SvgIconComponent
  ],
  imports: [BrowserModule, NzToolTipModule, NzIconModule.forRoot(NZ_JIRA_ICONS), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
