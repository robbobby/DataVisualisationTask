import {ChartType} from "angular-google-charts";

export function getChartTypeList(): ChartType[] {
	return [ChartType.AreaChart, ChartType.PieChart, ChartType.AnnotationChart, ChartType.BubbleChart, ChartType.AreaChart, ChartType.Bar, ChartType.Calendar, ChartType.CandlestickChart, ChartType.ColumnChart,
		ChartType.ComboChart, ChartType.Gantt, ChartType.Gauge, ChartType.GeoChart, ChartType.Histogram, ChartType.Line, ChartType.LineChart, ChartType.Map, ChartType.OrgChart, ChartType.Sankey
		, ChartType.Scatter, ChartType.ScatterChart, ChartType.SteppedAreaChart, ChartType.Table, ChartType.Timeline, ChartType.TreeMap, ChartType.WordTree

	]
}