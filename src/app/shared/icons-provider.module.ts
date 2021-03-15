import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  PlusOutline,
  UserOutline,
  CrownOutline,
  IdcardOutline,
  VideoCameraOutline,
  PlayCircleOutline,
  ControlOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  PlusOutline,
  UserOutline,
  CrownOutline,
  IdcardOutline,
  VideoCameraOutline,
  PlayCircleOutline,
  ControlOutline
];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [{ provide: NZ_ICONS, useValue: icons }]
})
export class IconsProviderModule {}
