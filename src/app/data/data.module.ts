import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, InjectionToken } from '@angular/core';

export interface DataModuleConfig {
  url: string;
  prefix?: string;
}

export const DATA_MODULE_CONFIG = new InjectionToken<DataModuleConfig>(
  'Data module config'
);

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [HttpClientModule],
})
export class DataModule {
  static forRoot(config: DataModuleConfig): ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
      providers: [
        {
          provide: DATA_MODULE_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
