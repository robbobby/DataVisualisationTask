import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {GoogleChartsModule} from "angular-google-charts";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule, GoogleChartsModule, BrowserAnimationsModule, MatExpansionModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
