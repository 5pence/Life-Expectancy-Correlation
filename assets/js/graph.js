queue()
    .defer(d3.csv, "assets/csv/WHOData.csv")
    .await(makeGraphs);


function makeGraphs(error, worldData) {
    var ndx = crossfilter(worldData);

    show_country_selector(ndx);
    show_status_balance(ndx);
    show_average_life_expectancy(ndx);
     show_average_adultMortality(ndx)

    dc.renderAll();
}

function show_country_selector(ndx)
{
    var countryDim = ndx.dimension(
        function (p) { return p.Country;
    });
    var countrySelect = countryDim.group();
    var select = dc.selectMenu("#country-selector")
        .dimension(countryDim)
        .group(countrySelect);
    select.title(function (d) {
        return d.key;
    })
}

function show_status_balance(ndx) {
    var statusDim = ndx.dimension(
        function (p) { return p.Status;
        });
    var statusMix = statusDim.group();

    dc.pieChart("#status-balance-pie")
        .dimension(statusDim)
        .group(statusMix)
        .cx(195)
        .cy(175)
        .drawPaths(true)
        .innerRadius(40)
        .radius(150)
        .transitionDuration(750);
}

function show_average_life_expectancy(ndx) {
    var statusDim = ndx.dimension(dc.pluck("Status"));
    var averageLifeExpectancyByStatus = statusDim.group().reduce(
        function (p, v) {
            p.count++;
            p.total += parseInt(v.LifeExpectancy);
            return p;
        },
        function (p, v) {
            p.count--;
            if (p.count == 0) {
                p.total = 0;
            } else {
                p.total -= parseInt(v.LifeExpectancy);
            }
            return p;
        },
        function () {
            return {count: 0, total: 0};
        }
    );

    dc.barChart("#average-Life-expectancy")
        .width(350)
        .height(350)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(statusDim)
        .group(averageLifeExpectancyByStatus)
        .valueAccessor(function (d) {
            if (d.value.count == 0) {
                return 0;
            } else {
                return d.value.total / d.value.count;
            }
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Country classification")
        .yAxisLabel("Life Expectancy Age")
        .yAxis().ticks(20);
}

function  show_average_adultMortality(ndx) {
    var statusDim = ndx.dimension(dc.pluck("Status"));
    var averageAdultMortalityByStatus = statusDim.group().reduce(
        function (p, v) {
            p.count++;
            p.total += parseInt(v.AdultMortality);
            return p;
        },
        function (p, v) {
            p.count--;
            if (p.count == 0) {
                p.total = 0;
            } else {
                p.total -= parseInt(v.AdultMortality);
            }
            return p;
        },
        function () {
            return {count: 0, total: 0};
        }
    );

    dc.barChart("#average-adult-mortality")
        .width(350)
        .height(350)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(statusDim)
        .group(averageAdultMortalityByStatus)
        .valueAccessor(function (d) {
            if (d.value.count == 0) {
                return 0;
            } else {
                return d.value.total / d.value.count;
            }
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Country classification")
        .yAxisLabel("Adult Mortality per Thousand")
        .yAxis().ticks(20);
}

