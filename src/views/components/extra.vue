<template>
  <div class="dashboard p-4">
    
    
    <!-- <div class="mt-2 lg:flex block lg:gap-2"> -->
          <nav class="flex" aria-label="Statistics">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
            href="#"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="mr-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <a
              href="#"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >Components</a
            >
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <a
              href="#"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >Statistics</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Grade Distribution Chart
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        This pie chart shows the distribution of all students' grades. 
        One segment is a representation of one of the possible grades.  
        Floating point values are included.
      </p>
    </div>
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <p class="text-gray-400 font-lexend font-normal">
          All Grades Distribution
        </p>

        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="pie"
            :options="optionsDonut"
            :series="seriesDonut"
          ></apexchart>
          <div class="p-3"></div>
          <br />
          <hr />
        
        </div>
      </div>
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Difficulty Per Question Histogram
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        This histogram shows the comparison of average score per question and its maximum amount of points. 
        This can be representative to answer the question "Which questions are relatively difficult or easy to answer?". 
      </p>
    </div>
            <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <p class="text-gray-400 font-lexend font-normal">
          Difficulty Per Question Statistics
        </p>
        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="bar"
            :options="optionsBar"
            :series="seriesBar"
          ></apexchart>
          <br />
          <hr />
          
        </div>
      </div>
    </div>
    
  <!-- </div> -->
</template>

<script>
  // @ is an alias to /src
  import { Icon } from "@iconify/vue";
  import axios from "axios";

async function gradePerStudent(a, t) { //a nd b - two data arrays
   let data = [];
  return await axios
    .get("http://127.0.0.1:8080/exams/product management/stats")
    .then((response) => {
      let arr1 = [];
      let arr2 = [];
      var gradeDist = response.data['gradeDistribution'];
      var gradeDistArr = Object.keys(gradeDist).map((key) => [Number(key), gradeDist[key]]);
    for (let i = 0; i < gradeDistArr.length; i++) {
      a.push(gradeDistArr[i][0]);
      t.push(Number(gradeDistArr[i][1])); 
    } 
    });
}

async function gradePerQuestionStats(a) { //a nd b - two data arrays
   let data = [];
  return await axios
    .get("http://127.0.0.1:8080/exams/product management/stats")
    .then((response) => {
      var gradeDist = response.data['avgScorePerQuestion'];
      var gradeDistArr = Object.keys(gradeDist).map((key) => [Number(key), gradeDist[key]]);
    for (let i = 0; i < gradeDistArr.length; i++) {
      a.push(Number(gradeDistArr[i][1]).toFixed(2)); 
    } 
    });
}

async function gradePerQuestionMax(a) { //a nd b - two data arrays
   let data = [];
  return await axios
    .get("http://127.0.0.1:8080/exams/product management/questions")
    .then((response) => {
      var gradeDist = response.data['questions'];
      var maxPoints = [];
      for (let i = 0; i < gradeDist.length; i++) {
        maxPoints.push(gradeDist[i]['points']);
      }
      var gradeDistArr = Object.keys(maxPoints).map((key) => [Number(key), maxPoints[key]]);
    for (let i = 0; i < gradeDistArr.length; i++) {
      a.push(Number(gradeDistArr[i][1]).toFixed(2)); 
    } 
    });
}

  export default {
    name: "Dashboard",
    data() {
      return {
        // for more guide apexchart.js
        // https://apexcharts.com/docs/chart-types/line-chart/

        // chart data area
        optionsArea: {
          xaxis: {
            categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
          },
          fontFamily: "Segoe UI, sans-serif",
          stroke: {
            curve: "straight",
          },

          markers: {
            size: 0,
          },
          yaxis: {
            show: false,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 90, 100],
            },
          },
        },

        chart: {
          fontFamily: "lexend, sans-serif",
        },

        seriesArea: [
          {
            name: "Revenue",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "Revenue (Previous period)",
            data: [20, 34, 45, 55, 79, 87, 90, 98],
          },
        ],
        optionsBar: {
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
            sparkline: {
              enabled: true,
            },
          },
          legend: {
            show: false,
          },
          xaxis: {
            show: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#4f46e5", "#DC2626"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
        },

        seriesBar: [
          {
            name: "Average Score Per Question",
            data: [],
          },
          {
            name: "Maximum Score Per Question",
            data: [],
          },
        ],
       

        seriesVisitor: [
          {
            name: "Visitor ",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
        optionsDonut: {
          chart: {
            type: "donut",
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: true,
          },
          labels: [],
        },

        seriesDonut: [],
        
      };
      // end chart data line
    },
      methods: {
    pushToTheChart: function() {
      gradePerStudent(this.optionsDonut.labels, this.seriesDonut);
      gradePerQuestionStats(this.seriesBar[0].data);
      gradePerQuestionMax(this.seriesBar[1].data);
    }
  },
    components: {
      Icon,
    },
    mounted() {
      this.pushToTheChart();
    },
  };
</script>