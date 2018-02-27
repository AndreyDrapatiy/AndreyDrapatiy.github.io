
// based on prepared DOM, initialize echarts instance
var myChartPie = echarts.init(document.getElementById('mainchart'));

// specify chart configuration item and data
option = {
    tooltip: {
        formatter: "<div style='width: 170px'><div style='font-size: 16px' class='text-center'>Some Information</div><div style='font-size: 14px' class='text-center'>{b} - {d}%</div></div>",
        backgroundColor: 'rgba(64, 64, 64, 1)',
        padding: 14,
        fontSize: 16,
        fontFamily : 'Open Sans'

    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
        padding: [0, 0, 0, 0],

        data:["A Item", "B Item", "C Item","D Item"],
        icon: 'circle',
        textStyle:{
            fontSize: 15,
            color: '#000'
        },
        itemWidth:12,
        itemHeight:12,
        itemGap: 6


    },
    series: [
        {
            name:"ABC Status",
            type:'pie',
            radius: ['55%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                    value:335,
                    name:"A Item",
                    itemStyle: {
                        normal: {
                            color: '#602fde'
                        }
                    }
                },
                {
                    value:310,
                    name:"B Item",
                    itemStyle:{
                        normal:{
                            color:"#00d9c4"
                        }
                    }
                },
                {
                    value:234,
                    name:"C Item",
                    itemStyle:{
                        normal:{
                            color:"#00b4ef"
                        }
                    }
                },
                {
                    value:234,
                    name:"D Item",
                    itemStyle:{
                        normal:{
                            color:"#2393df"
                        }
                    }
                }


            ]
        }
    ]
};


// use configuration item and data specified to show chart
myChartPie.setOption(option);
$(window).on('resize', function(){
    if(myChartPie != null && myChartPie != undefined){
        myChartPie.resize();
    }
});

// based on prepared DOM, initialize echarts instance
var myChartBar = echarts.init(document.getElementById('mainchart-bar'));

// specify chart configuration item and data

option = {

    media: [
        {
            query: {
                maxWidth: 768
            },
            option: {
                dataZoom:{
                    type: 'inside',
                    start:0,
                    end:50
                }
            }
        }
    ],

    baseOption:{
        tooltip : {
            formatter: "<div style='width: 170px'><div style='font-size: 16px' class='text-center'>Some Information</div><div style='font-size: 14px' class='text-center'>{b0} - {c0}</div></div>",
            backgroundColor: 'rgba(64, 64, 64, 1)',
            padding: 14,
            fontFamily : 'Open Sans'

        },

        legend: {
            show: 'none'
        },
        grid: {
            left: '2.5%',
            right: '2.5%',
            bottom: '2%',
            top: '10%',
            containLabel: true
        },
        yAxis:  {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#EDEDED'],
                    type: 'solid'
                }
            },

            axisLabel: {
                textStyle: {
                    color: '#A8A8A8',
                    fontSize : 14
                },
                verticalAlign: 'bottom'
            }
        },
        xAxis: {
            type: 'category',
            data: ["A Status", "B Status", "C Status", "D Status", "E Status", "F Status", "G Status", "H Status", "I Status", "J Status", "K Status"],
            axisLine:{
                lineStyle:{
                    color: '#EDEDED'
                }
            },
            axisLabel: {
                show:false
            }
        },
        series: [
            {
                name: 'Name',
                type: 'bar',

                stack: 'stack',

                itemStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#602fde'},
                                {offset: 1, color: '#505bc5'}
                            ]
                        )
                    },
                    emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#505bc5'},
                                {offset: 1, color: '#505bc5'}
                            ]
                        ),
                        shadowBlur: 8,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(180, 180, 180, 0.9)'
                    }
                },
                data: [12, 30, 30, 33, 39, 33, 32, 24, 33, 14, 22]
            },
            {
                name: 'Name',
                type: 'bar',
                stack: 'stack',

                itemStyle:{
                    normal:{
                        color: "#00b4ef"
                    },
                    emphasis: {
                        color: "#00b4ef",
                        shadowBlur: 8,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowColor: 'rgba(180, 180, 180, 0.9)'
                    }
                },
                data: [12, 13, 10, 13, 9, 23, 21, 12, 23, 33, 12]
            }


        ]
    }

};
// use configuration item and data specified to show chart
myChartBar.setOption(option);
$(window).on('resize', function(){
    if(myChartBar != null && myChartBar != undefined){
        myChartBar.resize();
    }
});

// based on prepared DOM, initialize echarts instance
// var myChartLine = echarts.init(document.getElementById('mainchart-line'));
//
// option = {
//     media: [
//         {
//             query: {
//                 maxWidth: 768
//             },
//             option: {
//                 dataZoom:{
//                     type: 'inside',
//                     start:0,
//                     end:50
//                 }
//             }
//         }
//     ],
//     baseOption:{
//         tooltip : {
//             trigger: 'axis',
//             axisPointer: {
//                 type: 'cross',
//                 label: {
//                     backgroundColor: '#A8A8A8'
//                 }
//             }
//         },
//
//         grid: {
//             left: '2.5%',
//             right: '2.5%',
//             bottom: '2%',
//             top: '10%',
//             containLabel: true
//         },
//
//         xAxis: {
//             type: 'category',
//             axisLine: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 textStyle: {
//                     color: '#A8A8A8'
//                 }
//             },
//             boundaryGap: false,
//             splitLine: {
//                 show: true,
//                 lineStyle: {
//                     color: ['rgba(180, 180, 180, 0.5)'],
//                     type: 'solid'
//                 }
//             },
//             data:[29, 27, 24, 25, 19, 26, 16, 27, 25, 20, 23, 26, 20, 27],
//
//         },
//         yAxis: {
//             type: 'value',
//             axisLine: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 textStyle: {
//                     color: '#A8A8A8'
//                 }
//             },
//             splitLine: {
//                 show: true,
//                 lineStyle: {
//                     color: ['rgba(180, 180, 180, 0.5)'],
//                     type: 'solid'
//                 }
//             }
//         },
//         series: [
//             {
//                 name:'item-1',
//                 type:'line',
//                 stack: '总量',
//                 symbolSize: 10,
//                 data:[29, 27, 24, 25, 19, 26, 16, 27, 25, 20, 23, 26, 20, 27],
//                 itemStyle:{
//                     normal:{
//                         color:'#EB5A5A'
//
//                     }
//                 },
//                 areaStyle:{
//                     normal:{
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(255, 0, 0, 0.22)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(254, 254, 254, 0)'
//                         }
//                         ])
//                     }
//                 }
//             },
//             {
//                 name:'item-2',
//                 type:'line',
//                 stack: '总量',
//
//                 symbolSize: 10,
//                 data:[31, 34, 26, 27, 20, 26, 31, 27,35, 23, 31, 24, 30, 33],
//                 itemStyle:{
//                     normal:{
//                         color:'#959595'
//                     }
//                 },
//                 areaStyle:{
//                     normal:{
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(149, 149, 149, 0.4)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(254, 254, 254, 0)'
//                         }])
//                     }
//                 }
//             }
//         ]
//     }
// };
//
// // use configuration item and data specified to show chart
// myChartLine.setOption(option);
// $(window).on('resize', function(){
//     if(myChartLine != null && myChartLine != undefined){
//         myChartLine.resize();
//     }
// });


var myChartLine = echarts.init(document.getElementById('mainchart-line'));

option = {
    media: [
        {
            query: {
                maxWidth: 768
            },
            option: {
                dataZoom:{
                    type: 'inside',
                    start:0,
                    end:40
                }
            }
        }
    ],
    baseOption:{
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                label: {
                    backgroundColor: '#A8A8A8'
                },
                z: 0,
                lineStyle:{
                    width: 2
                }
            }
        },
        legend: {
            data:['Item-1', 'Item-2'],
            icon: 'circle',
            textStyle:{
                fontSize: 15,
                color: '#000'
            },
            itemWidth:12,
            itemHeight:12,
            itemGap: 15
        },
        grid: {
            left: '2.5%',
            right: '2.5%',
            bottom: '2%',
            top: '10%',
            containLabel: true
        },
        xAxis: {

            type: 'category',
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#A8A8A8',
                    fontSize : 14
                }

            },

            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#EDEDED'],
                    type: 'solid'
                }
            }

        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#A8A8A8',
                    fontSize : 14
                },
                verticalAlign: 'bottom'
            },

            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#EDEDED'],
                    type: 'solid'
                }
            }
        },
        series: [
            {
                name:'Item-1',
                type:'line',
                symbolSize: 10,
                data:[32, 23, 30, 33, 39, 33, 13,12 ,32, 43, 23, 11,33,22],
                itemStyle:{
                    normal:{
                        color:'#00b4ef'

                    }
                },
                areaStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 180, 239, 0.22)'
                        }, {
                            offset: 1,
                            color: 'rgba(254, 254, 254, 0)'
                        }
                        ])
                    }
                }

            },
            {
                name:'Item-2',
                type:'line',
                symbolSize: 10,
                data:[22, 28, 20, 23, 29, 43, 41,21,43,11,33,22,44,55,66],
                itemStyle:{
                    normal:{
                        color:'#602fde'
                    }
                },
                areaStyle:{
                    normal:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(96, 47, 222, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(254, 254, 254, 0)'
                        }])
                    }
                }
            }

        ]
    }

};
// use configuration item and data specified to show chart
myChartLine.setOption(option);
$(window).on('resize', function(){
    if(myChartLine != null && myChartLine != undefined){
        myChartLine.resize();
    }
});





var myChartLine_2 = echarts.init(document.getElementById('mainchart-line-2'));

option = {
    media: [
        {
            query: {
                maxWidth: 768
            },
            option: {
                dataZoom:{
                    type: 'inside',
                    start:0,
                    end:50
                }
            }
        }
    ],
    baseOption:{
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                label: {
                    backgroundColor: '#A8A8A8'
                },
                z: 0,
                lineStyle:{
                    width: 2
                }
            }
        },

        legend: {
            data:['Item-1', 'Item-2'],
            icon: 'circle',
            textStyle:{
                fontSize: 15,
                color: '#000'
            },
            itemWidth:12,
            itemHeight:12,
            itemGap: 15
        },
        grid: {
            left: '2.5%',
            right: '2.5%',
            bottom: '2%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },

            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#EDEDED'],
                    type: 'solid'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#A8A8A8',
                    fontSize : 14
                }

            }

        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            legend:{
              show:true
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#EDEDED'],
                    type: 'solid'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#A8A8A8',
                    fontSize : 14
                },
                verticalAlign: 'bottom'
            }

        },
        series: [



            {
                name:'Item-1',
                type:'line',
                smooth: true,
                symbolSize: 10,
                data:[12, 13, 10, 13, 9, 23, 21,12 ,32, 43, 23, 11,33,22],
                itemStyle:{
                    normal:{
                        color:'#602fde'

                    }
                }
            },
            {
                name:'Item-2',
                type:'line',
                smooth:true,
                symbolSize: 10,
                data:[22, 28, 20, 23, 29, 43, 41,21,43,11,33,22,44,55,66],
                itemStyle:{
                    normal:{
                        color:'#2393df'
                    }
                }
            }

        ]
    }

};
myChartLine_2.setOption(option);
$(window).on('resize', function(){
    if(myChartLine_2 != null && myChartLine_2 != undefined){
        myChartLine_2.resize();
    }
});



