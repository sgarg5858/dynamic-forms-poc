import { inject, Injector, Pipe, PipeTransform } from '@angular/core';
import { DynamicControl } from '@dynamic-forms-poc/infrastructure/interfaces';
import { CONTROL_CONFIG } from '../token/control-config.token';

@Pipe({
  name: 'controlConfigInjector',
})
export class ControlConfigInjectorPipe implements PipeTransform {
  parentInjector = inject(Injector);

  transform(controlConfig: DynamicControl): Injector {
    const injector = Injector.create({
      parent: this.parentInjector,
      providers: [
        {
          provide: CONTROL_CONFIG,
          useValue: controlConfig,
        },
      ],
    });
    return injector;
  }
}
