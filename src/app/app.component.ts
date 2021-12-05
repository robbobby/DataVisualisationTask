import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "./Interfaces/country";
import {ChartType} from "angular-google-charts";
import {getChartTypeList} from "./ChartsTypeList"

function getChartTypes() {
	return Object.entries(ChartType).filter(e => !isNaN(e[0]as any)).map(e => ({ name: e[1], id: e[0] }))
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
	constructor(private elementRef: ElementRef, private http: HttpClient) {	}

	title = 'Browser market shares at a specific website, 2014';
	chartType = ChartType.PieChart;
	chartTypes = getChartTypeList();
	data: (string | number)[][] = [];
	columnNames = ['Browser', 'Percentage'];
	options = {};
	width = 1600;
	height = 600;
	panelOpenState = false;

	readonly ROOT_URL = "https://covid19-api.com/"
	readonly ALL_COUNTRY_LATEST = "country/all"

	ngAfterViewInit() {
		this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "rgb(43,43,43)";
		this.getAllCountriesLatest();
	}



	changeChartWidth(width: number) { this.width = width; }
	changeChartHeight(height: number) { this.height = height; }
	setChartType(chartType: ChartType) { this.chartType = chartType; }

	getAllCountriesLatest() {
		this.http.get<Country[]>(this.ROOT_URL + this.ALL_COUNTRY_LATEST)
			.subscribe(countries => {
				countries.map(y => this.data.push([y.country, y.deaths]));
			});
	}

}
