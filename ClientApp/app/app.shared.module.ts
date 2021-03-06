
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import { ChartModule } from 'angular2-chartjs';

import { PhotoService } from './services/photo.service';
import { VehicleService } from './services/vehicle.service';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { ProgressService,  BrowserXhrWithProgress } from './services/progress.service';
import { AuthService } from './services/auth.service';
import { AUTH_PROVIDERS } from "angular2-jwt/angular2-jwt";
import { AdminComponent } from './components/admin.component';
//import { AppErroHandler } from './app.error-handler';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        VehicleFormComponent,
        VehicleListComponent,
        PaginationComponent,
        ViewVehicleComponent,
        AdminComponent
    ],
    imports: [
        CommonModule,
        ChartModule,
        ToastyModule.forRoot(),
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
            { path: 'vehicles/new', component: VehicleFormComponent},
            { path: 'vehicles/edit/:id', component: VehicleFormComponent},
            { path: 'vehicles/:id', component: ViewVehicleComponent},
            { path: 'vehicles', component: VehicleListComponent},
            { path: 'home', component: HomeComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    exports: [
        PaginationComponent
    ],
    providers: [
        { provide: BrowserXhr, useClass: BrowserXhrWithProgress }, 
        //{ provide: ErrorHandler, useClass: AppErroHandler},
        VehicleService,
        PhotoService,
        ProgressService,
        AuthService,
        AUTH_PROVIDERS
    ]
})
export class AppModuleShared {
}
