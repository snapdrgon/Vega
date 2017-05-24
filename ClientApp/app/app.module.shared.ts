import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component'
import { VehicleNewComponent } from './components/app/vehicle/vehicle-new.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        VehicleNewComponent    
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: 'vehicle-new', component: VehicleNewComponent },
            { path: '**', redirectTo: 'vehicle-new' }
        ])
    ]
};
