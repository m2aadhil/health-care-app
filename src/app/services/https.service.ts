import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

/**
 *
 *
 * @export
 * @class HttpService
 */
@Injectable()

/**
 * A service for accessing HTTPS information.
 *
 */
export class HttpService {

    httpOptions: any = {};

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            //withCredentials: true
        };
    }

    getData(dataUrl: string): Promise<any> {
        return this.http.get(dataUrl, this.httpOptions)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    deleteData(dataUrl: string): Promise<any> {
        return this.http.delete(dataUrl, this.httpOptions)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    postData(dataUrl: string, body: any): Promise<any> {
        return this.http.post(dataUrl, body, this.httpOptions)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        if (error.status && error.status === 401) {
            //redirectToLogin();
        }
        return Promise.reject(error.message || error);
    }
}