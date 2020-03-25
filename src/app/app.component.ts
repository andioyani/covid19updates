import { Component } from '@angular/core';
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
  language:string = 'es';

  constructor (private translate: TranslateService) {

    if (localStorage.getItem('language') === null) {
      localStorage.setItem('language', 'es'); 
    }

    this.language = localStorage.getItem('language');

  	translate.setDefaultLang(this.language);
  }

  ngOnInit() {}

  useLanguage(language: string) {
      this.translate.use(language);
      this.language = language;
      localStorage.setItem('language', language);
  }

}
