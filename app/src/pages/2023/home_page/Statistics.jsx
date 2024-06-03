import "./statistics.css";
import ReactECharts from "echarts-for-react";

export default function Statistics() {
  const option = {
    title: {
      //   text: 'IT Fields',
      //   textStyle: {
      //     fontFamily: 'PT Mono',
      //     color: 'white'
      //   }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      textStyle: {
        color: "white",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLabel: {
        textStyle: {
          fontFamily: "PT Mono",
          color: "white",
        },
      },
    },
    yAxis: {
      type: "category",
      data: [
        "Back-end Development",
        "Front-end Development",
        "Business analysis, Business Intelligence & Analytics",
        "IT Administration",
        "Product Ownership",
        "Project & Product management",
        "QA & Testing",
        "UX/UI Design",
        "App & Mobile Development",
        "Cybersecurity",
        "Startups & Entrepreneurship",
        "No IT field mentioned",
      ],
      axisLabel: {
        textStyle: {
          fontFamily: "PT Mono",
          color: "white",
        },
      },
    },
    series: [
      {
        name: "Mentors&Experts",
        type: "bar",
        data: [4, 6, 1, 2, 1, 1, 2, 4, 0, 0, 0, 9],
        itemStyle: {
          color: "#76a142",
        },
      },
      {
        name: "Mentees",
        type: "bar",
        data: [6, 10, 9, 0, 9, 18, 13, 19, 1, 1, 1, 0],
        itemStyle: {
          color: "#008046",
        },
      },
    ],
  };
  //Code with circles(pies) as option
  // option1 = {
  //     title: {
  //       text: 'Mentors',
  //       subtext: '2023',
  //       left: 'center',
  //       textStyle: {
  //         fontFamily: 'PT Mono',
  //         fontSize: 24,
  //         color: '#76a142'
  //       },
  //       subtextStyle: {
  //         fontFamily: 'PT Mono',
  //         fontSize: 16,
  //         color: '#76a142'
  //       }
  //     },
  //     tooltip: {
  //       trigger: 'item',
  //       textStyle: {
  //         fontFamily: 'PT Mono',
  //         fontSize: 14,
  //         color: '#76a142'
  //       }
  //     },
  //     legend: {
  //       orient: 'vertical',
  //       left: '10%',
  //       textStyle: {
  //         fontFamily: 'PT Mono',
  //         fontSize: 14,
  //         color: '#76a142'
  //       }
  //     },
  //     series: [
  //       {
  //         name: 'IT Field',
  //         type: 'pie',
  //         radius: '40%',
  //         data: [
  //           { value: 4, name: 'Back-end Development' },
  //           { value: 1, name: 'Business analysis, Business Intelligence & Analytics' },
  //           { value: 6, name: 'Front-end Development' },
  //           { value: 2, name: 'IT Administration' },
  //           { value: 9, name: 'No IT field mentioned' },
  //           { value: 1, name: 'Product Ownership'},
  //           { value: 1, name: 'Project & Product management'},
  //           { value: 2, name: 'QA & Testing'},
  //           { value: 4, name: 'UI/UI Design'}
  //         ],
  //         itemStyle: {
  //             color: function(params) {
  //               const colors = ['#008046', '#85AB31', '#C6D1A1', '#F08080', '#FFA07A', '#20B2AA', '#40D494', '#EFC45D', '#E5EF5D'];
  //               return colors[params.dataIndex];
  //             }
  //           },
  //         emphasis: {
  //           itemStyle: {
  //             shadowBlur: 10,
  //             shadowOffsetX: 0,
  //             shadowColor: 'rgba(0, 0, 0, 0.5)'
  //           }
  //         }
  //       }
  //     ]
  //   };

  //   const option2 = {
  //     title: {
  //       text: 'Mentees',
  //       subtext: '2023',
  //       left: 'center',
  //       textStyle: {
  //         fontFamily: 'PT Mono',
  //         fontSize: 24,
  //         color: '#008046'
  //       },
  //       subtextStyle: {
  //         fontFamily: 'PT Mono',
  //         fontSize: 16,
  //         color: '#008046'
  //       }
  //     },
  //     tooltip: {
  //       trigger: 'item',
  //       textStyle: {
  //         fontFamily: 'PT Mono',
  //         fontSize: 14,
  //         color: '#008046'
  //       }
  //     },
  //     legend: {
  //       orient: 'vertical',
  //       left: '10%',
  //       textStyle: {
  //         fontFamily: 'PT Mono',
  //         fontSize: 14,
  //         color:  '#008046'
  //       }
  //     },
  //     series: [
  //       {
  //         name: 'IT Field',
  //         type: 'pie',
  //         radius: '40%',
  //         data: [
  //             { value: 6, name: 'Back-end Development' },
  //             { value: 9, name: 'Business analysis, Business Intelligence & Analytics' },
  //             { value: 10, name: 'Front-end Development' },
  //             { value: 2, name: 'IT Administration' },
  //             { value: 1, name: 'App & Mobile Development' },
  //             { value: 9, name: 'Product Ownership'},
  //             { value: 18, name: 'Project & Product management'},
  //             { value: 13, name: 'QA & Testing'},
  //             { value: 19, name: 'UI/UI Design'},
  //             { value: 1, name: 'Cybersecurity'},
  //             { value: 1, name: 'Startups & Entrepreneurship'}
  //         ],
  //         itemStyle: {
  //             color: function(params) {
  //               // Define colors for each slice
  //               const colors = ['#008046', '#85AB31', '#C6D1A1', '#F08080', '#5DDAEF', '#20B2AA', '#40D494', '#EFC45D', '#E5EF5D', '#9F81A7', '#6956B8'];
  //               return colors[params.dataIndex];
  //             }},
  //         emphasis: {
  //           itemStyle: {
  //             shadowBlur: 10,
  //             shadowOffsetX: 0,
  //             shadowColor: 'rgba(0, 0, 0, 0.5)'
  //           }
  //         }
  //       }
  //     ]
  //   };

  return (
    <>
      <div className="statistics">
        <div className="statItemMentor">
          <p className="statValue">30</p>
          <p className="statName">Mentors&Experts 2023</p>
        </div>
        <div className="statItemMentee">
          <p className="statValue">80</p>
          <p className="statName">Mentees 2023</p>
        </div>
        <div className="statItemProject">
          <p className="statValue">16</p>
          <p className="statName">Projects 2023</p>
        </div>
      </div>
      <div className="chart">
        <ReactECharts
          option={option}
          style={{ width: "80%", margin: "0 auto" }}
        />
      </div>
    </>
  );
}
