import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppConfiguration {
    libraryBaseURL: string;

    constructor() {
        this.libraryBaseURL = environment.serverUrls.pb360Library;
    }
}
