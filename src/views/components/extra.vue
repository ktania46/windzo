<template>
  <div class="dashboard p-4">
    
    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          Student Report
        </h2>
        <p class="text-gray-400 font-lexend font-normal">
          Scores
        </p>
        <span class="float-right mr-20">
          <h2 class="text-red-500 -mt-12 flex">
            <span class="mr-2"> data </span
            ><span>
              <Icon icon="akar-icons:arrow-down" />
            </span>
          </h2>
        </span>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> data </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
        <br />
        <apexchart
          width="100%"
          height="380"
          type="area"
          :options="optionsArea"
          :series="seriesArea"
          :sparkline="{
            enabled: true,
          }"
        ></apexchart>
        <br />
        <hr />
        
      </div>
      
    </div>
    <div class="mt-2 lg:flex block lg:gap-2">
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">
          1,780
        </h2>
        <p class="text-gray-400 font-lexend font-normal">
          Stats
        </p>
        <span class="float-right">
          <h2 class="text-green-500 -mt-12 flex">
            <span class="mr-2"> 27.9% </span
            ><span>
              <Icon icon="akar-icons:arrow-up" />
            </span>
          </h2>
        </span>
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
      
      <div
        class="mt-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <h2 class="font-bold text-lg text-gray-800 dark:text-gray-200">475</h2>
        <p class="text-gray-400 font-lexend font-normal">
          Overview
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
    </div>
    
  </div>
</template>

<script>
  // @ is an alias to /src
  import { Icon } from "@iconify/vue";

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
            name: "Product 1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "Product 2",
            data: [20, 34, 45, 55, 79, 87, 90, 98],
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
          legend: false,
          dataLabels: {
            enabled: false,
          },
          labels: ["admin", "SuperAdmin", "User", "Costumer"],
        },

        seriesDonut: [20, 15, 63, 83],
        
      };
      // end chart data line
    },
    components: {
      Icon,
    },
    mounted() {},
  };
</script>