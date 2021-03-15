import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { SharedModule } from '@app/shared/shared.module';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    BlankLayoutComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [CommonModule, RouterModule, NzCollapseModule, SharedModule, CoreModule],
  exports: [
    AuthLayoutComponent,
    MainLayoutComponent,
    BlankLayoutComponent,
    SidebarComponent,
    NavbarComponent
  ]
})
export class LayoutsModule {}
