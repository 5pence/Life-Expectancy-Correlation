queue()
    .defer(d3.csv, "assets/csv/lifeExpectancyData.csv")
    .await(makeGraphs);


function makeGraphs(error, worldData) {
    var ndx = crossfilter(worldData);

    show_country_selector(ndx);
    show_percentage_of_develop_countries(ndx, "Developing", "#percent-of-developing-countries");
    show_percentage_of_develop_countries(ndx, "Developed", "#percent-of-developed-countries");

    dc.renderAll();
}


function show_country_selector(ndx) {
    var countryDim = ndx.dimension(dc.pluck("Country"));
    var countrySelect = countryDim.group();

    dc.selectMenu("#country-selector")
        .dimension(countryDim)
        .group(countrySelect);
}

function show_percentage_of_develop_countries(ndx, dStatus, element) {
    var total = 0;
    var state = 0;
    var percentThatAreDevelopingCountries = ndx.groupAll().reduce(
        function (p, v) {
            if (v.Status === dStatus) {
                p.count++;
            }
        total += 0;
    return (state / total) * 100;
        }
    );
}


