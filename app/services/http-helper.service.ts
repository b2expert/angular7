import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpHelperService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    private _httpConfigs = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    /**
     * **REQUEST TO FETCH DATA FROM SERVER**
     * @description This is GET request
     * @param relUrl 
     * @param configs 
     * @returns Observable<
     */
    public fetchData(relUrl: string, configs?: any) {
        configs = configs ? configs : this._httpConfigs;
        try {
            return this._httpClient
                .get(relUrl, configs)
                .pipe(
                    map((response: any) => {
                        return response;
                    })
                );
        } catch (reason) {
            throw reason;
        }
    }
}