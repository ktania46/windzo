<template>
  <!-- Search component Breadcumb with name of type  press Ctrl + F -->
  <div
    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
  >
    <div class="grid grid-cols-1 mt-16 gap-5">
      <div class="card w-full p-5 rounded-md bg-white dark:bg-gray-800">
        <h2 class="text-lg font-lexend dark:text-gray-200">
          Edit Student Score
        </h2>
        <form @submit.prevent="onUpdateForm">
          <div class="mb-12">
            <input v-model="message" placeholder="Enter student ID" />
          </div>
          <button
            type="button"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            click here to edit
          </button>
        </form>
      </div>
    </div>
  </div>
  <div class="beadcumb h-auto p-3">
    <nav class="flex" aria-label="Evaluation">
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
            Course
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
              >Project Management</a
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
              >Evaluation</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->

    <div class="grid grid-cols-1 mt-10 gap-5">
      <div class="card w-full p-5 rounded-md bg-white dark:bg-gray-800">
        <h2 class="text-lg font-lexend dark:text-gray-200">
          Student Evaluation
          <DoughnutChart v-bind="doughnutChartProps" />
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import axios from "axios";
Chart.register(...registerables);
export default defineComponent({
  name: "evaluation",
  setup() {
    const dataValues = ref([30, 40, 60, 70, 5]);
    const dataLabels = ref(["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"]);
    const toggleLegend = ref(true);

    const testData = computed(() => ({
      labels: dataLabels.value,
      datasets: [
        {
          data: dataValues.value,
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    }));

    const options = computed(() => ({
      scales: {
        myScale: {
          type: "logarithmic",
          position: toggleLegend.value ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: toggleLegend.value ? "top" : "bottom",
        },
        title: {
          display: true,
        },
      },
    }));

    const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
      chartData: testData,
      options,
    });

    let index = ref(20);

    function shuffleData() {
      // dataValues.value = shuffle(dataValues.value);
      dataValues.value.push(index.value);
      dataLabels.value.push("Other" + index.value);
      console.log(dataValues.value);
      console.log(doughnutChartRef.value.chartInstance);
      index.value++;
    }

    function switchLegend() {
      toggleLegend.value = !toggleLegend.value;
    }

    return {
      shuffleData,
      switchLegend,
      testData,
      options,
      doughnutChartRef,
      doughnutChartProps,
    };
  },
  data() {
    return {
      student: {},
    };
  },
  components: {
    DoughnutChart,
  },
  async created() {
    async function test() {}
    async function ariaTest() {
      axios
        .get(
          "http://127.0.0.1:8080/exams/product management/students/5/questions/8"
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
    }

    ariaTest();
  },
});
</script>
