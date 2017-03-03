/* Morris donut */

$(function() {
    "use strict";
    Morris.Donut({
        element: 'donut',
        backgroundColor: '#fff',
        labelColor: '#ccc',
        colors: [
            '#4fb2ff',
            '#929292',
            '#67C69D',
            '#ff9393'
        ],
        data: [{
            value: 70,
            label: 'CREDIT',
            formatted: 'at least 70%'
        }, {
            value: 30,
            label: 'DIRECT',
            formatted: 'approx. 30%'
        }],
        formatter: function(x, data) {
            return data.formatted;
        }
    });
});

/* Author:

*/

$(function() {
    

    Morris.Area({
        element: 'hero-area',
        data: [{
            period: '2010 Q1',
            Vendors: 2666,
            Resellers: 2234
        }, {
            period: '2010 Q2',
            Vendors: 2778,
            Resellers: 2294
        }, {
            period: '2010 Q3',
            Vendors: 4912,
            Resellers: 1969
        }, {
            period: '2010 Q4',
            Vendors: 3767,
            Resellers: 3597
        }, {
            period: '2011 Q1',
            Vendors: 6810,
            Resellers: 1914
        }, {
            period: '2011 Q2',
            Vendors: 5670,
            Resellers: 4293
        }, {
            period: '2011 Q3',
            Vendors: 4820,
            Resellers: 3795
        }, {
            period: '2011 Q4',
            Vendors: 15073,
            Resellers: 5967
        }, {
            period: '2012 Q1',
            Vendors: 10687,
            Resellers: 4460
        }, {
            period: '2012 Q2',
            Vendors: 8432,
            Resellers: 5713
        }],
        xkey: 'period',
        ykeys: ['Vendors', 'Resellers'],
        labels: ['Vendors', 'Resellers'],
        pointSize: 2,
        hideHover: 'auto'
    });
	
	Morris.Bar({
        element: 'hero-bar2',
        data: [{
            device: 'Reseller 1',
            geekbench: 34136
        }, {
            device: 'Reseller 2',
            geekbench: 23137
        }, {
            device: 'Reseller 3',
            geekbench: 12275
        }, {
            device: 'Reseller 4',
            geekbench: 8380
        }, {
            device: 'Reseller 5',
            geekbench: 5655
        }, {
            device: 'Reseller 6',
            geekbench: 4571
        }, {
            device: 'Reseller 7',
            geekbench: 3571
        }, {
            device: 'Reseller 8',
            geekbench: 2571
        }, {
            device: 'Reseller 9',
            geekbench: 1571
        }, {
            device: 'Reseller 10',
            geekbench: 300
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Sales'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto'
    });

    Morris.Bar({
        element: 'hero-bar',
        data: [{
            device: 'Vendor 1',
            geekbench: 34136
        }, {
            device: 'Vendor 2',
            geekbench: 23137
        }, {
            device: 'Vendor 3',
            geekbench: 12275
        }, {
            device: 'Vendor 4',
            geekbench: 8380
        }, {
            device: 'Vendor 5',
            geekbench: 5655
        }, {
            device: 'Vendor 6',
            geekbench: 4571
        }, {
            device: 'Vendor 7',
            geekbench: 3571
        }, {
            device: 'Vendor 8',
            geekbench: 2571
        }, {
            device: 'Vendor 9',
            geekbench: 1571
        }, {
            device: 'Vendor 10',
            geekbench: 300
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Sales'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto'
    });

});
