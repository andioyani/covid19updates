import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Coronavirus';
  messagesResultsJSON:string [];
  confirmedCases:string [];
  countryName:string = null;

  constructor (private httpService: HttpClient, private translate: TranslateService) {
  	//console.log(navigator.language);
  	//let language:string = (navigator.language != 'en' && navigator.language != 'es') ? navigator.language != 'es' :  ;

  	//this.translate.setDefaultLang('en');
	translate.setDefaultLang('es');
  }

  //messagesList:{content:string}[] = messages;

  ngOnInit() {  
  	/*
    this.httpService.get('./assets/json/messages.json').subscribe(
      data => {
        this.messagesResultsJSON = data["messages"] as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    */
  }


	onChange(country){
	    this.confirmedCases = null; 	
	   	console.log(country);
	   	if(country != null && country != ""){
		    this.httpService.get('https://pomber.github.io/covid19/timeseries.json').subscribe(
		      data => {

		    	data[country].sort((a, b) => {
					return a.id < b.id ? 1 : -1; 
	          		//return a.date < b.date ? 1 : -1;
	     		});

		    	this.confirmedCases = data[country] as string [];


		    	console.log(this.confirmedCases);
		        //this.messagesResultsJSON = data["messages"] as string [];	 // FILL THE ARRAY WITH DATA.
		        //  console.log(this.arrBirds[1]);
		      },
		      (err: HttpErrorResponse) => {
		        console.log (err.message);
		      }
		    );

	   	}
    }

	useLanguage(language: string) {
	    this.translate.use(language);
	}

}
