import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentureComponent } from './venture.component';



@NgModule({
    declarations: [
        VentureComponent
    ],
    exports: [
        VentureComponent
    ],
    imports: [
        CommonModule
    ]
})
export class VentureModule { }
