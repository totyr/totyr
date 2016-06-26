;'use strict';

(function(){
 showMainChart();
 $('.select').change(function(){
   showMainChart();
 });
}
)();

function showMainChart(group,subGroup,metricName,type){
  var group=$('#groupSel').val();
  var subGroup=$('#subGroupSel').val();
  var type=$('#typeSel').val();
  var metricName=$('#metricSel').val();
  var xLen=ty.formatFloat(Math.random(),1)*10+1;
  var groupArr=[];
  var dataArr=[];
  if(type=='pie'){
    for(var i=1;i<xLen;i++){//随机生成图表
      dataArr.push([group+i,ty.formatFloat(Math.random(),3)*100]);
    }
  }
  else{
    for(var i=0;i<xLen;i++){//随机生成图表
      groupArr.push(group+i);
      dataArr.push(ty.formatFloat(Math.random(),3)*100);
    }
  }
  var option={
        chart: {
            type: type||'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        xAxis: {
           categories:groupArr
       },
        title: {
            text:'自定义图表之 '+group +' '+subGroup
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: type||'pie',
            name:metricName||'num' ,
            data:dataArr
        }]
    };
    var mainChart=$("#mainChart").highcharts(option);
}
