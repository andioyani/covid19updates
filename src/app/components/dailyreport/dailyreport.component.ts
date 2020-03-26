import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ReportsService } from '../../services/reports.service';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-dailyreport',
  templateUrl: './dailyreport.component.html',
  styleUrls: ['./dailyreport.component.css'],
	providers: [ReportsService, CountriesService]

})
export class DailyreportComponent implements OnInit {
	countrySelected:string = null;
	messagesResultsJSON:string [];
	confirmedCases:string [];
	countryName:string = null;
	countryList:string [] = [];

	constructor(public _reportsService: ReportsService, public _countriesService: CountriesService){}

	ngOnInit() {
	    this._countriesService.getCountries().subscribe(
	    	(data) => {	
	    		for(let key in data) {
	    			this.countryList.push(key);
	    		}
	    	}
	    )		
	}

	onChange(country){
		this.countrySelected = country;

	   	if(country != null && country != ""){
		    this._reportsService.getReports(country).subscribe(
		      data => {

		      	let confirmedDiff = 0;
		      	let deathsDiff = 0;
		      	let recoveredDiff = 0;
				
		      	let tempObj = {};
		      	let temp=[];

		      	if(data[country] != null){
  			    	data[country].forEach( function (data){
				    	data["confirmedDiff"] = (data.confirmed > confirmedDiff) ? "+" + (data.confirmed - confirmedDiff) : "0";
				    	data["deathsDiff"] = (data.deaths > deathsDiff) ? "+" + (data.deaths - deathsDiff) : "0";
				    	data["recoveredDiff"] = (data.recovered > recoveredDiff) ? "+" + (data.recovered - recoveredDiff) : "0";					

						confirmedDiff = data.confirmed;						
						deathsDiff = data.deaths;						
						recoveredDiff = data.recovered;						

				    	data["deathRatio"] = (data.deaths < 1) ? 0 : (data.deaths/data.confirmed) * 100;

						confirmedDiff = data.confirmed;						
						deathsDiff = data.deaths;						
						recoveredDiff = data.recovered;						
			    	});		    

			    	data[country].sort((a, b) => {
						return a.id < b.id ? 1 : -1; 
		     		});		
		      	}

		    	this.confirmedCases = data[country] as string [];
		      },
		      (err: HttpErrorResponse) => {
		        console.log (err.message);
		      }
		    );

	   	}
	   	
    }

}
