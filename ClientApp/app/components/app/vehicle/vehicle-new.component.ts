import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VegaService } from '../../../services/vega.service';
import { Make } from '../data/make';
import { Feature } from '../data/feature';

@Component({
    selector: 'vehicle-new',
    templateUrl: './vehicle-new.component.html',
    styleUrls: ['./vehicle-new.component.css'],
    providers: [VegaService] //would not normally place this here, but throws no provider error otherwise
    }
)

export class VehicleNewComponent implements OnInit, OnDestroy {
    vegaAddForm: FormGroup;
    makes: Make[];
    features: Feature[];
    subscribe;
    constructor(fb: FormBuilder, private _service: VegaService) {
        this.vegaAddForm = fb.group({
            make: [],
            model: [],
            registered: [],
            features: [],
            contactName: [],
            contactPhone: [],
            contactEmail: []
        });

    }

   ngOnInit() {
       this.makes = [];
       this.features = [];
       this.subscribe = this._service.getMakes()
           .subscribe(makes => {
               makes.forEach(make => { this.makes.push(make) })
           });
       this.subscribe = this._service.getFeatures()
           .subscribe(features => {
               features.forEach(feature => { this.features.push(feature) })
           });
   }

   ngOnDestroy() {
       this.subscribe.destroy;
   }
}