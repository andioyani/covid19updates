import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(protected http: HttpClient){}

  	getCountries():any{
		return this.http.get('https://pomber.github.io/covid19/countries.json');
  	}
}