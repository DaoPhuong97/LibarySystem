import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryLoginComponent } from '../libary/components/login/login.component';

const libraryRoutes: Routes = [
    {
        path: '',
        children: [
           {
                path: '',
                component: LibraryLoginComponent,
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(libraryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LibraryRoutingModule { }
