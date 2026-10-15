// Resolve chart and data URLs relative to the website root.
const siteBase = new URL("./", window.location.href);

const embedOptions = {
    actions: false,
    loader: vega.loader({
        baseURL: siteBase.href
    })
};

// Chart 1: SA3 Choropleth Map
vegaEmbed(
    "#sa3_map",
    "charts/sa3_choropleth.json",
    embedOptions
).catch(console.error);

// Chart 2: Breast Screening Non-Participation Dot Density Map
vegaEmbed(
    "#state_participation",
    "charts/socioeconomic_screening_dot_density_map.json",
    embedOptions
).catch(console.error);

// Chart 3: National Participation Trend
vegaEmbed(
    "#national_trend",
    "charts/national_participation_trend.json",
    embedOptions
).catch(console.error);

// Chart 4: Age Group Participation Heatmap
vegaEmbed(
    "#age_heatmap",
    "charts/age_group_participation_heatmap.json",
    embedOptions
).catch(console.error);

// Chart 5: Remoteness Participation Grouped Bar Chart
vegaEmbed(
    "#remoteness_bar",
    "charts/remoteness_participation_bar.json",
    embedOptions
).catch(console.error);

// Chart 6: Rescreening Rate Multi-series Line Chart
vegaEmbed(
    "#rescreening_line",
    "charts/rescreening_by_round_line.json",
    embedOptions
).catch(console.error);

// Chart 7: SA3 Screening Participation Box Plot
vegaEmbed(
    "#sa3_gap_map",
    "charts/sa3_participation_boxplot.json",
    embedOptions
).catch(console.error);

// Chart 8: Breast Cancer Detection by Age
vegaEmbed(
    "#cancer_detection_dotplot",
    "charts/cancer_detection_by_age_dotplot.json",
    embedOptions
).catch(console.error);

// Chart 9: Breast Cancer Incidence Trend
vegaEmbed(
    "#incidence_trend",
    "charts/breast_cancer_incidence_trend.json",
    embedOptions
).catch(console.error);

// Chart 10: Breast Cancer Mortality Symbol Map
vegaEmbed(
    "#mortality_map",
    "charts/state_mortality_symbol_map.json",
    embedOptions
).catch(console.error);

// Chart 11: Screening Participation vs Mortality Scatter Plot
vegaEmbed(
    "#screening_mortality_scatter",
    "charts/state_screening_vs_mortality_scatter.json",
    embedOptions
).catch(console.error);

// Chart 12: Rescreening Slope Chart
vegaEmbed(
    "#rescreening_slope",
    "charts/rescreening_slope_chart.json",
    embedOptions
).catch(console.error);

// Chart 13: Lowest SA3 Participation Lollipop Chart
vegaEmbed(
    "#sa3_lollipop",
    "charts/sa3_lowest_participation_lollipop.json",
    embedOptions
).catch(console.error);