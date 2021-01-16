import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { HeaderComponent } from './user-layout/header/header.component';
import { FooterComponent } from './user-layout/footer/footer.component';
import { SidebarComponent } from './user-layout/sidebar/sidebar.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserDashboardComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
