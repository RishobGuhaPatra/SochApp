import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-soch-chart',
  templateUrl: './soch-chart.page.html',
  styleUrls: ['./soch-chart.page.scss'],
})
export class SochChartPage implements OnInit {

  constructor() { }
  ngOnInit(){
    this.plotDynamicSplineChart();
  }

  ionViewDidEnter() {
    
  }

  plotSimpleBarChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [
        {
          name: 'Jane',
          type: undefined,
          data: [1, 0, 4]
        },
        {
          name: 'John',
          type: undefined,
          data: [5, 7, 3]
        }]
    });
  }
  plotDynamicSplineChart() {
    let myChart = HighCharts.chart('dynamicSpline', {
      chart: {
        type: 'spline',
        animation: true, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {

            // set up the updating of the chart each second
            var series = this.series[0];
            var xx=0;
           
            var interval=setInterval(function () {
              console.log(interval);
             
              var x = (new Date()).getTime(), // current time
              
                y =Math.random();;
               
                // for(j = 1; j <= 5; j += 1){
                //   y=j;
                // }
              series.addPoint([x, y], true, true);
               xx=xx+1;
            }, 1000);
          }
        }
      },

      time: {
        useUTC: false
      },

      // title: {
      //   text: 'Live random data'
      // },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Random data',
        type: undefined,
        data: (function () {
          // generate an array of random data
          var data = [],
            time = (new Date()).getTime(),
            i;
            // for(i = 1; i <= 5; i += 1){
            //   data.push({
            //         x: time + i * 1000,
            //         y: Math.random()
            //       });
            // }

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random()
            });
          }
          return data;
        }())
      }]

    });
  }


}
