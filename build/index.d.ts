import { ModuleWithProviders, PipeTransform } from '@angular/core';
export declare class EmojifyPipe implements PipeTransform {
    transform(text: string): string;
}
export declare class EmojifyModule {
    static forRoot(): ModuleWithProviders;
}
