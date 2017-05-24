import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';
import { Injectable } from '@angular/core';
import { Make } from '../components/app/data/make';
import { Feature } from '../components/app/data/feature';

@Injectable()
export class VegaService {

    private url = 'http://localhost:50872/api/';

    constructor(private _http: Http) {}

    getMakes(): Observable<Make[]> {
        var makeObservable = this._http.get(this.url + 'makes')
            .map(resp => resp.json());
        return makeObservable;
    }

    getFeatures(): Observable<Feature[]> {
        var ftObservable = this._http.get(this.url + 'features')
            .map(resp => resp.json());
        return ftObservable;
    }

}