// BAR CHART
const barChartOptions = {
  series: [{ data: [10, 8, 6, 4] }],
  chart: {
    type: "bar",
    height: 350,
    toolbar: { show: false },
    responsive: [
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        options: {
          chart: {
            height: 200, // Adjust the height for smaller screens
          },
        },
      },
    ],
  },
  colors: ["#01395e", "#fd4445", "#0091cf", "#ffaf00"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Laptop", "Phone", "Monitor", "Headphones"],
  },
  yaxis: {},
};

const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: "Purchase Orders",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales Orders",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: { show: false },
    responsive: [
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        options: {
          chart: {
            height: 200, // Adjust the height for smaller screens
          },
        },
      },
    ],
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Purchase Orders",
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render();

// pie chart
const chartData = {
  labels: ["Pending", "Completed", "Delayed"],
  data: [5, 32, 10],
  dollar: ["$576", "$876", "$987"],
};

const ul = document.querySelector(".Gc-doughnut-details ul");
const barColors = ["#ffaf00", " #01395e", " #fd4445"];

new Chart(myChart, {
  type: "pie",
  data: {
    // labels: chartData.labels,
    datasets: [
      {
        label: "data",
        data: chartData.data,
        backgroundColor: barColors,
      },
    ],
  },
  options: {
    responsive: true,
    borderWidth: 0,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutoutPercentage: 70,
  },
});

const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${chartData.data[i]} ${l}<span class='percentage'>${chartData.dollar[i]}</span>`;
    ul.appendChild(li);
  });
};

populateUl();

const chartData1 = {
  labels: ["Pending", "Completed", "Delayed"],
  data: [5, 3, 1],
  dollar: ["$576", "$876", "$987"],
};

const ul1 = document.querySelector(".GC-donutchart-two ul");
const barColors1 = ["#ffaf00", " #01395e", " #fd4445"];

new Chart(myChart2, {
  type: "pie",
  data: {
    // labels: chartData.labels,
    datasets: [
      {
        label: "data",
        data: chartData1.data,
        backgroundColor: barColors1,
      },
    ],
  },
  options: {
    borderWidth: 0,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutoutPercentage: 70,
  },
});

const populateUl1 = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${chartData1.data[i]} ${l}<span class='percentage'>${chartData1.dollar[i]}</span>`;
    ul1.appendChild(li);
  });
};

populateUl1();

const chartDatathird = {
  labels: ["Pending", "Completed", "Delayed"],
  data: [5, 4, 7],
  dollar: ["$576", "$876", "$987"],
};

const ulthird = document.querySelector(".GC-donutchart-third ul");
const barColorsthird = ["#ffaf00", " #01395e", " #fd4445"];

new Chart(myChartthird, {
  type: "pie",
  data: {
    // labels: chartData.labels,
    datasets: [
      {
        label: "data",
        data: chartDatathird.data,
        backgroundColor: barColorsthird,
      },
    ],
  },
  options: {
    borderWidth: 0,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutoutPercentage: 70,
  },
});

const populateUlthird = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${chartDatathird.data[i]} ${l}<span class='percentage'>${chartDatathird.dollar[i]}</span>`;
    ulthird.appendChild(li);
  });
};

populateUlthird();

// linechart
var smallChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Revenue",
      borderColor: "#0091cf",
      data: [30, 35, 33, 38],
      fill: false,
      tension: 0.4, // Set the tension value for curve style
    },
  ],
};

var smallCtx = document.getElementById("mySmallLineChart").getContext("2d");
var mySmallLineChart = new Chart(smallCtx, {
  type: "line",
  data: smallChartData,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
});

// myLinechart-yellow

var smallChartData2 = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Revenue",
      borderColor: "#ffaf00",
      data: [30, 32, 31, 34],
      fill: false,
      tension: 0.4, // Set the tension value for curve style
    },
  ],
};

var smallCtx2 = document.getElementById("myLineChart-yellow").getContext("2d");
var myLineChartyellow = new Chart(smallCtx2, {
  type: "line",
  data: smallChartData2,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
});

// myLinechart-red

var smallChartData3 = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Revenue",
      borderColor: "#fd4445",
      data: [30, 31, 32, 33],
      fill: false,
      tension: 0.4, // Set the tension value for curve style
    },
  ],
};

var smallCtx3 = document.getElementById("myLineChart-red").getContext("2d");
var myLineChartred = new Chart(smallCtx3, {
  type: "line",
  data: smallChartData3,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
});

// myLinechart-blue

var smallChartData4 = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Revenue",
      borderColor: "#01395e",
      data: [65, 59, 70, 72],
      fill: false,
      tension: 0.4, // Set the tension value for curve style
    },
  ],
};

var smallCtx4 = document.getElementById("myLineChart-blue").getContext("2d");
varmyLineChartblue = new Chart(smallCtx4, {
  type: "line",
  data: smallChartData4,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  },
});

// submenu
function toggleSubMenu() {
  var submenu = document.getElementById("Gc-submenu-content");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

function FinanceSubMenu() {
  var submenu = document.getElementById("Gc-Finance-Submenu");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

function OperationSubMenu() {
  var submenu = document.getElementById("Gc-Operations-submenu");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
function MarketingSubMenu() {
  var submenu = document.getElementById("Gc-Marketing-submenu");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
function CustomerSubMenu() {
  var submenu = document.getElementById("Gc-Customer-submenu");
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

// TOGGLE SIDEBAR#content
// TOGGLE SIDEBAR

const menuBar = document.querySelector("#Gc-content nav .bx.bx-menu");
const sidebar = document.getElementById("Gc-sidebar");
const chevronDownIcon = document.querySelector(".Gc-Dropdown .bx-chevron-down");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
  chevronDownIcon.classList("hide");
});

const searchButton = document.querySelector(
  "#Gc-content nav form .form-input button"
);
const searchButtonIcon = document.querySelector(
  "#Gc-content nav form .form-input button .bx"
);
const searchForm = document.querySelector("#Gc-content nav form");

searchButton.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchButtonIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.classList.add("hide");
} else if (window.innerWidth > 576) {
  searchButtonIcon.classList.replace("bx-x", "bx-search");
  searchForm.classList.remove("show");
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 576) {
    searchButtonIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

function mydropFunction() {
  var dropdown = document.getElementById("myDropdown");

  // Toggle the class to show/hide the dropdown content
  dropdown.classList.toggle("Gcdrop-show");
}


