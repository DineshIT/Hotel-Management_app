import React from "react";
import Chart from "chart.js/auto";
import adminLayout from "../hoc/adminLayout";

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.barChartRef = React.createRef();
    this.pieChartRef = React.createRef();
  }

  componentDidMount() {
    const barChart = new Chart(this.barChartRef.current, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "My Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const pieChart = new Chart(this.pieChartRef.current, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3],
            backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
            borderWidth: 1,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: 'center', float: "none", margin: "0 auto" }}>
        <div style={{ width: "50%", justifyContent: 'center', float: "none", margin: "0 auto" }}>
          <canvas ref={this.barChartRef} style={{ width: "50%", height: "250px", align: "center" }} />
        </div>
        <div style={{ width: "10%" }}></div>
        <div class="col-md-6" >
          <div class="topcenter" style={{width: "50%"}}>
            <h2 class="sectiontext">Top 10 Items</h2>
            <br />
            <canvas ref={this.pieChartRef} style={{ width: "50%", align: "center" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default adminLayout(DashboardPage);
