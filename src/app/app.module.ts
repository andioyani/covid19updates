import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DailyreportComponent } from './components/dailyreport/dailyreport.component';
import { InformationComponent } from './components/information/information.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DailyreportComponent,
    InformationComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    TranslateModule.forRoot({
    	loader: {
	        provide: TranslateLoader,
	        useFactory: HttpLoaderFactory,
	        deps: [HttpClient]
    	}
	})

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http,'assets/i18n/', '.json');
}

