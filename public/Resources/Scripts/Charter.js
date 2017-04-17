(() => {
    google.charts.load('current', {'packages':['corechart']});

    const init = () => {
        let data = new google.visualization.DataTable();
        data.addColumn('string', 'Day');
        data.addColumn('number', 'Visitors');
        data.addRows([
            ['Saturday', 3905],
            ['Sunday', 4594],
            ['Monday', 146],
            ['Tuesday', 5789],
            ['Wednesday', 6774]
        ]);

        // Set chart options
        let options = {
            'width': '100%',
            'height': '100%',
            backgroundColor: { fill:'transparent' },
            hAxis: {
                textStyle: {
                    color: '#FFFFFF',
                    fontName: 'Roboto Slab'
                },
                gridlineColor: "#121212",
                baselineColor: '#121212'
            },
            vAxis: {
                textStyle: {
                    color: '#FFFFFF',
                    fontName: 'Roboto Slab'
                }
            },
            colors: ['#FF5555'],
            legend: {
                textStyle: {
                    color: '#FFFFFF',
                    fontName: 'Roboto Slab'
                }
            },
            tooltip: {
                textStyle: {
                    color: '#FFFFFF',
                    fontName: 'Roboto Slab'
                },
                backgroundColor: {
                    fill: '#363636'
                },
                isHtml: true
            },
            bar: {
                groupWidth: 40
            }
        };

        let optionsDDoS = JSON.parse(JSON.stringify(options));
        optionsDDoS.colors = ['#6fc5a3'];

        // Instantiate and draw our chart, passing in some options.
        let chart = new google.visualization.LineChart(document.querySelector('#chart-1'));
        let chartDDoS = new google.visualization.ColumnChart(document.querySelector('#chart-2'));
        chartDDoS.draw(data, optionsDDoS);
        chart.draw(data, options);
    };

    google.charts.setOnLoadCallback(init);
})();