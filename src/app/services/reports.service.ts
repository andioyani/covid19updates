import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(
	protected http: HttpClient
  	) { 
  	}

  	getReports(country:string){
		return this.http.get('https://pomber.github.io/covid19/timeseries.json');
  	}
}