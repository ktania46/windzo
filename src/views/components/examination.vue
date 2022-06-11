<template>
  <!-- Search component Examination with name of type, press Ctrl + F -->

  <div class="Examination h-auto p-3">
    <nav class="flex" aria-label="Examination">
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
              >Examination</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
	
	<div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Examination info
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Here you can observe all examination info for a chosen subject.
      </p>
    </div>
    
<div class="mt-5 w-full">
  <h1 class="text-1xl text-gray-900 font-medium dark:text-gray-200">Please select a student</h1>
</div>

  <div class="m-4">
    <table-lite
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="table.sortable"
      :messages="table.messages"
      @do-search="doSearch"
      @is-finished="table.isLoading = false"
    />
  </div>

  </div>
</template>


<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
import { reactive } from "vue";
import TableLite from "vue3-table-lite";

//my first try to use fetch. it gives error and I don't really understand how to implement it
//copied from this tutorial:
//https://www.javascripttutorial.net/javascript-fetch-api/#:~:text=The%20Fetch%20API%20allows%20you,resolve%20into%20the%20actual%20data.

// fetch("https://hmiapi.cr4.live/exams", {
//   "method": "GET",
//   "headers": {
//     "Authorization": "Basic SE1JOjNDQzZraGFmRzA="
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => {
//   console.error(err);
// });


// import axios from "axios";

// const options = {
//   url: 'https://hmiapi.cr4.live/exams'
// };

// axios.get(options.url, {}, {
//   auth: {
//     username: "HMI",
//     password: "3CC6khafG0"
//   }
// }).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });




// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://HMI:3CC6khafG0@hmiapi.cr4.live/exams'
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

//this option gives Request cannot be constructed from a URL that includes credentials: https://HMI:3CC6khafG0@hmiapi.cr4.live/exams
    //     let response = await fetch('https://HMI:3CC6khafG0@hmiapi.cr4.live/exams',{ 
    //       mode: 'no-cors'
    // }); 
    //console.log("status " + response.status); 
    //console.log(response.statusText); 

//     if (response.status === 200) {
//         let data = await response.text();
//         // handle data
//     }
fetch("https://hmiapi.cr4.live/exams", {
  "method": "GET",
  "headers": {
    "Authorization": "Basic SE1JOjNDQzZraGFmRzA="
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => {
  console.error(err);
});

// fetchText();


// Fake Data for 'asc' sortable
const sampleData1 = (offst, limit) => {
  offst = offst + 1;
  let data = [];
  var language = ['German','English'];
  var passed = ['passed','failed'];
  for (let i = offst; i <= limit; i++) {
  	var a = Math.floor(Math.random() * 2);
	var b = Math.floor(Math.random() * 2);
    data.push({
      id: i,
      language: language[a],
      answered: Math.floor(Math.random() * 30),
	  passed: passed[b]
    });
  }
  return data;
};

// Fake Data for 'desc' sortable
const sampleData2 = (offst, limit) => {
  let data = [];
  var language = ['German','English'];
  var passed = ['passed','failed'];
  for (let i = limit; i > offst; i--) {
	var a = Math.floor(Math.random() * 2);
	var b = Math.floor(Math.random() * 2);
    data.push({
      id: i,
      language: language[a],
      answered: Math.floor(Math.random() * 30),
	  passed: passed[b]
    });
  }
  return data;
};

export default {
  name: "Dashboard",
  setup() {
    // Table config
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "Question number",
          field: "id",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Question name",
          field: "qname",
          width: "10%",
          sortable: false,
        },
		{
          label: "Correct answer",
          field: "canswer",
          width: "15%",
          sortable: false,
        },
		{
          label: "Given answer",
          field: "ganswer",
          width: "15%",
          sortable: false,
        },
        {
      label: "Points std/max",
      field: "points",
      width: "15%",
      sortable: false,
    },
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc",
      },
    });

    /**
     * Search Event
     */
    const doSearch = (offset, limit, order, sort) => {
      console.log("Ekas")
      table.isLoading = true;
      setTimeout(() => {
        table.isReSearch = offset == undefined ? true : false;
        if (offset >= 10 || limit >= 20) {
          limit = 20;
        }
        if (sort == "asc") {
          table.rows = sampleData1(offset, limit);
        } else {
          table.rows = sampleData2(offset, limit);
        }
        table.totalRecordCount = 20;
        table.sortable.order = order;
        table.sortable.sort = sort;
      }, 600);
    };

    // First get data
    doSearch(0, 10, "id", "asc");

    return {
      table,
      doSearch
    };
  },
  data() {
    return {
      // for more guide apexchart.js
      // https://apexcharts.com/docs/chart-types/line-chart/

      // chart data line
      optionsLine: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        },
      },
      colors: ["#16A34A"],
      stroke: {
        curve: "smooth",
      },
      seriesLine: [
        {
          name: "series-1",

          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
    // end chart data line
  },
  components: {
    Icon,
    TableLite,
  },
  mounted() {},
};
</script>
