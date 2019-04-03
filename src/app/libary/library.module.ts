import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { AppConfiguration } from './services/app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { MarterialModule } from '../material';
import { LibraryLoginComponent } from '../libary/components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        LibraryRoutingModule,
        HttpClientModule,
        MarterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        
        LibraryLoginComponent
    ],
    entryComponents : [
      
        LibraryLoginComponent      
    ],
    exports: [
        CommonModule,
        HttpClientModule,
    ],
    providers: [
      
        AppConfiguration,
       
    ]
})
export class LibraryModule { }
