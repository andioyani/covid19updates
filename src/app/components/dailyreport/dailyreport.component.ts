import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dailyreport',
  templateUrl: './dailyreport.component.html',
  styleUrls: ['./dailyreport.component.css']
})
export class DailyreportComponent implements OnInit {

  title = 'Coronavirus';
  messagesResultsJSON:string [];
  confirmedCases:string [];
  countryName:string = null;

  constructor (private httpService: HttpClient) {}

  ngOnInit() {}


	onChange(country){
	    this.confirmedCases = null; 	
	   	if(country != null && country != ""){
		    this.httpService.get('https://pomber.github.io/covid19/timeseries.json').subscribe(
		      data => {

		      	let confirmedDiff = 0;
		      	let deathsDiff = 0;
		      	let recoveredDiff = 0;
				
		      	let tempObj = {};
		      	let temp=[];

		    	data[country].forEach( function (data){
		    		//data[country].num = data.confirmed - num;
					
			    	data["confirmedDiff"] = (data.confirmed > confirmedDiff) ? "+" + (data.confirmed - confirmedDiff) : "0";
			    	data["deathsDiff"] = (data.deaths > deathsDiff) ? "+" + (data.deaths - deathsDiff) : "0";
			    	data["recoveredDiff"] = (data.recovered > recoveredDiff) ? "+" + (data.recovered - recoveredDiff) : "0";
						
			    	data["deathRatio"] = (data.deaths/data.confirmed) * 100;

					confirmedDiff = data.confirmed;						
					deathsDiff = data.deaths;						
					recoveredDiff = data.recovered;						

					console.log(data);
		    	});

		    	


		    	data[country].sort((a, b) => {
					return a.id < b.id ? 1 : -1; 
	     		});


		    	this.confirmedCases = data[country] as string [];
		      },
		      (err: HttpErrorResponse) => {
		        console.log (err.message);
		      }
		    );

	   	}
    }

}
