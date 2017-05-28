﻿import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VegaService } from '../../services/vega.service';
import { Make } from '../../data/make';
import { Model } from '../../data/model';
import { ContactInfo } from '../../data/contactInfo';
import { Feature, FeatureFlag } from '../../data/feature';

@Component({
    selector: 'vehicle',
    templateUrl: './vehicle.component.html',
    styleUrls: ['./vehicle.component.css'],
    providers: [VegaService] //would not normally place this here, but throws no provider error otherwise
    }
)

export class VehicleComponent implements OnInit, OnDestroy {
    vegaAddForm: FormGroup;
    makes: Make[]=[];
    models: Model[]=[];
    features: Feature[] = [];
    featureFlags: FeatureFlag[] = [];
    contactInfo: ContactInfo = { name: '', phone: '', email: '' };
    title: string;
    subscribe;
    registered: boolean;

    constructor(fb: FormBuilder, private _service: VegaService) {
        this.title = 'Build a Vega';;
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
           .subscribe(makes => this.makes = makes);
       this.subscribe = this._service.getFeatures()
           .subscribe(features => {
               features.forEach(feature => {
                   this.features.push(feature);
                   this.featureFlags.push({id:feature.id,selected: false})
               })
           });

       console.log(this.makes);
   }

   ngOnDestroy() {
       this.subscribe.destroy;
   }

 
   onMakeChange(id) {
       var selectedMake = this.makes.find(make => make.id === +id);
       this.models = selectedMake ? selectedMake.models : [];
   }

   onModelChange(make) {
       console.log(make);
   }

   onFeatureChecked(feature:Feature) {
       var flag = this.featureFlags.find(f => f.id === feature.id);
       flag.selected = !flag.selected;
   }

   onSave() {
       console.log(JSON.stringify(this.featureFlags));
   }
}