import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/ja';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ant design
import { vi_VN, NZ_I18N } from 'ng-zorro-antd/i18n';
import { HttpClientModule } from '@angular/common/http';
import { DataModule } from '@app/data/data.module';
import { environment } from '@env';
import { NzButtonModule } from 'ng-zorro-antd/button';

// Contains all shared modules
const MODULES: any[] = [
  CommonModule,
  IconsProviderModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NzSelectModule,
  DataModule.forRoot({ url: environment.apiUrl }),

  NzButtonModule
];

// Contains all shared components
const COMPONENTS: any[] = [];

// Contains all shared pipes
const PIPES: any[] = [];

// Contains all shared directives
const DIRECTIVES: any[] = [];

// Contains all shared services
const SERVICES: any[] = [];

registerLocaleData(vi);

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  providers: [...SERVICES, { provide: NZ_I18N, useValue: vi_VN }]
})
export class SharedModule {}
