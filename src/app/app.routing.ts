import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyreportComponent } from './components/dailyreport/dailyreport.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { InformationComponent } from './components/information/information.component';

const appRoutes: Routes = [
	{path: '', component: DailyreportComponent },
	{path: 'daily', component: DailyreportComponent },
	{path: 'information', component: InformationComponent },
	{path: 'contact', component: ContactComponent },
	{path: 'about', component: AboutComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);