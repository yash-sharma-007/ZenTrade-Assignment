const left_graph = document.getElementById("left").getContext("2d");

const left = new Chart(left_graph, {
  type: "bar",
  data: {
    labels: [
      "Edmonds",
      "Mukilteo",
      "Bothell",
      "Lynnwood",
      "Seattle",
      "Everett",
      "Bellevue",
      "Redmond",
    ],
    datasets: [
      {
        label:"Revenue By Job Location",
        data: [35000, 40000, 45000, 50000, 60000, 70000, 80000, 100000],
        backgroundColor:["rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)"]
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Revenue for November 2019 ($)'
          }
        }],

        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Job Locations'
            }
          }]
      }  
      
  },
});







const right_graph = document.getElementById("right").getContext("2d");

const right = new Chart(right_graph, {
  type: "bar",
  data: {
    labels: ["Service Plumbing","Bid Work HVAC","Service HVAC","Bid Work Plumbing","HWT Replacement","Maintenance","Material Sale","It Sector"],
    datasets: [
      {
        label:"Revenue By Job Type",
        data: [10000, 24000, 50000, 60000, 70000, 80000, 95000, 140000],
        backgroundColor:["rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)","rgb(6, 214, 121)"]
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Revenue for November 2019 ($)'
          }
        }],

        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Job Types'
            }
          }]
      }  
  },
});

