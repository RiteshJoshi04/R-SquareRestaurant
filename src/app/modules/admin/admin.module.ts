import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './admin-layout/header/header.component';
import { FooterComponent } from './admin-layout/footer/footer.component';
import { SidebarComponent } from './admin-layout/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdminDashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule
  ]
})
export class AdminModule { }
