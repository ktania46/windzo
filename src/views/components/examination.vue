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
<input v-model="text">   <button type="button" @click="chooseStd">Submit</button>
{{ text }} this is text
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

import axios from "axios";

var questions;

// async function ariaTest() {
//   axios.get('http://127.0.0.1:8080/exams/project management/students/1/reports').then
//   ((response)=> {
//     console.log(response.data['questions']);
//     return response.data;
//   })
//   .catch((err)=> console.log(err))
// }

// ariaTest();

//var questions = response.data['Message']

// fetchText();


// Fake Data for 'asc' sortable

function chooseStd(){
console.log("did it");
return true;
}

  async function sampleData1(offst, limit, std) {
  return await axios.get('http://127.0.0.1:8080/exams/project management/students/'+std+'/reports').then
  ((response)=> {
    let data = [];
    console.log(response.data['questions']);
    console.log("size " + response.data['questions'].length);
    console.log(offst+ "DAAD" + limit);
    offst = offst + 1;
    for (let i = offst; i <= limit; i++) {
      data.push({
        id: response.data['questions'][i-1]['questionID'],
        qname: response.data['questions'][i-1]['question'],
        canswer: response.data['questions'][i-1]['correct'],
        ganswer: response.data['questions'][i-1]['answer'],
        points: response.data['questions'][i-1]['stdPoints']+"/"+response.data['questions'][i-1]['maxPoints']
      });
    }
    console.log(data);
    return data;
  })
  .catch((err)=> console.log(err))
}

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
          isKey: true,
          sortable: true,
        },
        {
          label: "Question name",
          field: "qname",
          width: "20%",
        },
		{
          label: "Correct answer",
          field: "canswer",
          width: "15%",
        },
		{
          label: "Given answer",
          field: "ganswer",
          width: "15%",
        },
        {
      label: "Points std/max",
      field: "points",
      width: "5%",
    },
      ],
      rows: [],
      totalRecordCount: 50,
      sortable: {
        order: "id",
        sort: "asc",
      },
    });

    /**
     * Search Event
     */
   async function doSearch(offset, limit, order, sort, std) {
      table.isLoading = true;
        table.isReSearch = offset == undefined ? true : false;
        if (offset >= 10) {
          limit = offset+10;
        }
        table.rows = await sampleData1(offset, limit, std);
        table.totalRecordCount = 47;
        table.sortable.order = order;
        table.sortable.sort = sort;
    };

    // First get data
    //doSearch(0, 10, "id", "asc", 5);

    return {
      table,
      doSearch,
    };
  },
  data() {
    return {
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
      text: '',
    };
    // end chart data line
  },
  components: {
    Icon,
    TableLite,
  },
    methods: {
    chooseStd: function () {
      console.log("HI!" + this.text);
      this.doSearch(0, 10, "id", "asc", this.text);

    },
  },
  mounted() {},
};
</script>
