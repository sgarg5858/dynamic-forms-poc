import { InjectionToken } from "@angular/core";
import { DynamicControl } from "@dynamic-forms-poc/infrastructure/interfaces";

export const CONTROL_CONFIG = new InjectionToken<DynamicControl>('Control Config')