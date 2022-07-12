<template>
  <!-- Search component Students with name of type, press Ctrl + F -->

  <div class="Students h-auto p-3">
    <nav class="flex" aria-label="Students">
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
              >Students</a
            >
          </div>
        </li>
      </ol>
    </nav>
  </div>
    <!-- end nav -->
   <!--  <vue3-slider v-model="myNumber" color="#FB278D" track-color="#FEFEFE" />
<label for="customRange3" class="form-label">Example range</label> -->


	<div class="mt-5 ml-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Students info
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Here you can observe all Students info for a chosen subject.
      </p>
    </div>

          <br>
          <span class="bg-blue-700 ml-5 rounded-md text-xs py-1 px-4 text-white"
            >"EN" - English</span
          >&nbsp;&nbsp;
          <span class="bg-green-600 rounded-md text-xs py-1 px-4 text-white"
            >"DE" - German</span>&nbsp;&nbsp;
            <span class="bg-red-600 rounded-md text-xs py-1 px-4 text-white"
            >"SA" - Sentence answer</span
          >&nbsp;&nbsp;
           <span class="bg-orange-600 rounded-md text-xs py-1 px-4 text-white"
            >"PO" - Pick one
          </span>&nbsp;&nbsp;
          <span class="bg-red-600 rounded-md text-xs py-1 px-4 text-white"
            >"PM" - Pick multiple</span
          >&nbsp;&nbsp;<br>
          <p class="mt-5 ml-5 text-sm font-normal text-gray-400">
            * Evaluation is done only when the analysed answer differs from the original answer.
          </p>
          
          <div
        class="mt-2 ml-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
      >
        <p class="text-gray-400 font-lexend font-normal">
          All Grades Distribution Assuming {{percentage}}% as dead pass
        </p>

        <div class="wrapper-chart mt-5">
          <apexchart
            width="100%"
            height="380"
            type="pie"
            :options="this.optionsDonut"
            :series="this.seriesDonut"
          ></apexchart>
          <div class="p-3"></div>
          <br />
          <hr />
        
        </div>
      </div>
      <div class="range">
  <input @change="rangeChanged($event)" type="range" class="form-range" min="0" max="100" step="1" id="customRange3" />
  <h1 style="margin-left:5.5%; color:gray">{{percentage}}</h1>
</div>
 <div
    class="block p-2 w-full mt-2 ml-2 bg-white dark:bg-gray-800 p-5 w-full rounded-md box-border shadow"
  >
  
    <div class="wrapping-table mt-1">
      <table
        class="w-full text-xs text-justify text-left text-gray-500 dark:text-gray-400 overflow-auto sm:overflow-visible md:overflow-hidden lg:overflow-x-scroll"
      >
        <thead
          class="text-xs px-1 py-1 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th style="text-align: center;" scope="col" class="uppercase px-2 py-1">Index</th>
            <th style="text-align: center;" scope="col" class="uppercase px-2 py-1">Student ID</th>
            <th style="text-align: center;" scope="col" class="uppercase px-1 py-1">Exam score</th>
            <th style="text-align: center;" scope="col" class="uppercase px-1 py-1">Status</th>
            </tr>
            <!-- <th scope="col" class="uppercase px-6 py-1">Question Type</th>
            <th
              scope="col"
              class="accordion-packed uppercase display:inline-block px-5 py-5"
            >
              Question Name
            </th>
            <th
              scope="col"
              class="accordion-packed uppercase display:inline-block px-5 py-5"
            >
              Correct Answer
            </th>
            <th
              scope="col"
              class="accordion-packed uppercase display:inline-block px-5 py-5"
            >
              Given Answer
            </th>
            <th scope="col" class="uppercase px-6 py-1">*Evaluated</th>
            <th scope="col" class="uppercase px-1 py-1">Maximum std</th>
            <th scope="col" class="uppercase px-6 py-1">Points std</th>
            
            
          </tr> -->
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
            v-for="result in overalResults"
            :key="result.studentId"
          >
            <td style="text-align: center;" class="px-6 py-4">
              {{result.index}}
            </td> 
            <td style="text-align: center;" class="px-6 py-4">
              {{result.studentId}}
            </td> 
            <td style="text-align: center;" class="px-6 py-4">
              {{result.grade}}
            </td> 
            <td style="text-align: center;" v-if="parseInt(result.grade) ===5" class="px-6 py-4">
               <span class="text-justify bg-red-500 rounded-full py-2 px-4 "></span>
            </td> 
            <td style="text-align: center;" v-else class="px-6 py-4">
               <span class="text-justify bg-green-500 rounded-full py-2 px-4 "></span>
            </td>       
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <br />
  <button
    @click="submitNewPoints"
    type="button"
    class="py-2.5 px-8 mr-2 mb-2 ml-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  >
    Submit
  </button>
  <p>
  <button @click="prevPage" :disabled="cantGoBack">Previous</button> 
  <button @click="nextPage">Next</button>
  </p>
</template>
<script>

// @ is an alias to /src
import { Icon } from "@iconify/vue";
import { reactive,  isProxy, toRaw } from "vue";

import axios from "axios";
import AppAccordion from "../../components/AppAccordion.vue";
import requireObjectCoercible from "core-js/internals/require-object-coercible";
import { taggedTemplateExpression } from "@babel/types";
import slider from "vue3-slider"
//import 'vue-range-component/dist/vue-range-slider.css';
import VueRangeSlider from 'vue-range-component';




var questions;

function chooseStd() {
  console.log("did it");
  return true;
}

async function sampleData1(offst, limit, std) {
  console.log("ooomadam");
  if (std !== "") {
    return await axios
      .get(
        "http://127.0.0.1:8080/exams/product management/students/" +
          std +
          "/reports"
      )
      .then((response) => {
        let data = [];
        console.log(response.data["questions"]);
        console.log("size " + response.data["questions"].length);
        console.log(offst + "DAAD" + limit);
        offst = offst + 1;
        for (let i = offst; i <= limit; i++) {
            data.push({
              id: response.data["questions"][i - 1]["questionID"],
              qname: response.data["questions"][i - 1]["question"],
              lang: response.data["lang"],
              qtype: response.data["questions"][i - 1]["questionType"],
              canswer: response.data["questions"][i - 1]["correct"],
              ganswer: response.data["questions"][i - 1]["answer"],
              stdPoint: response.data["questions"][i - 1]["stdPoints"],
              eval: response.data["questions"][i - 1]["evalutated"],
              qPoint: response.data["questions"][i - 1]["maxPoints"],
              points: response.data["questions"][i - 1]["stdPoints"],
              mtr: response.data["mtr"],
            });
          }
         /*  if (qId === "") {
            data.push({
              id: response.data["questions"][i - 1]["questionID"],
              qname: response.data["questions"][i - 1]["question"],
              canswer: response.data["questions"][i - 1]["correct"],
              ganswer: response.data["questions"][i - 1]["answer"],
              stdPoint: response.data["questions"][i - 1]["stdPoints"],
              qPoint: response.data["questions"][i - 1]["maxPoints"],
              points: response.data["questions"][i - 1]["stdPoints"],
              mtr: response.data["mtr"],
            });
          } */
          //console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }
}


export default {
  name: "Dashboard",

  setup() {
    // Table config
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "Student ID",
          field: "id",
          width: "3%",
          isKey: true,
        },
        {
          label: "Question number",
          field: "id",
          width: "3%",
          isKey: true,
        },
          {
          label: "Exam Language",
          field: "lang",
          width: "3%",
          isKey: true,
        },
        {
          label: "Question Type",
          field: "qtype",
          width: "3%",
          isKey: true,
        },
        {
          label: "Question name",
          field: "qname",
          width: "20%",
        },
        {
          label: "Correct answer",
          field: "canswer",
          width: "3%",
        },
        {
          label: "Given answer",
          field: "ganswer",
          width: "3%",
        },
         {
          label: "Evaluated",
          field: "eval",
          width: "3%",
        },
        {
          label: "Maximum points",
          field: "points",
          width: "5%",
        },
        {
          label: "Points std",
          field: "",
          width: "10%",
        },
      ],
      rows: [],
      totalRecordCount: 50,
    });
    
  async function gradePerStudent(percentage) { //a nd b - two data arrays
    
      this.optionsDonut.labels=[];
      console.log(this.optionsDonut.labels);
     // this.optionsDonut.$forceUpdate();
      this.seriesDonut=[];
      //this.optionsDonut.labels=[];
      await axios
      .get("http://127.0.0.1:8080/exams/product management/stats?percentage=" +percentage)
      .then((response) => {
        var gradeDist = response.data['gradeDistribution'];
        var gradeDistArr = Object.keys(gradeDist).map((key) => [Number(key), gradeDist[key]]);
     
      for (let i = 0; i < gradeDistArr.length; i++) 
      {
          
         
          console.log(gradeDistArr[i][0]);
          this.seriesDonut.push(Number(gradeDistArr[i][1]));
          this.optionsDonut.labels.push(Number(gradeDistArr[i][0]));

      }
      });          
}

     async function getOveralResults(percentage){
      let overalResults = [];
      http://127.0.0.1:8080/exams/product management/stats?percentage=0.1
      await axios.get("http://127.0.0.1:8080/exams/product management/stats?percentage=" +percentage).then
      ((response)=> 
        {
         // console.log(response.data['gradePerStudent']);
          var result = Object.keys(response.data['gradePerStudent']).map((key) => 
          [Number(key), response.data['gradePerStudent'][key]]);
          for (let i = 0; i < result.length; i++) {
              overalResults.push({
              studentId: result[i][0],
              index: i+1,
              grade:result[i][1]
            });
            }
              
        });
      this.overalResults = overalResults
    }


    async function doSearch(offset, limit, order, sort, std, questionId) {
      if (offset >= 47) {
        limit = offset + 47;
      }
    //  this.questions = await getQuestions();
      
      this.student = await sampleData1(
        offset,
        limit,
        std,
        questionId,
        this.questions
      );
    }
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };

    return {
      table,
      doSearch,
      updateCheckedRows,
      getOveralResults,
      gradePerStudent
    };
  },
  data() {
    return {
      examResult: {
        studentId: "",
        grade:"",
        index:"",
      },
      value: [0, 100],
      percentage:50,
      questions: {},
      student: {},
      overalResults: [],
      labels:[],
      seriesDonut: [],
      optionsDonut: {
          labels :[],
          chart: {
            type: "donut",
          },
          legend: {
            show: true,
          },
          dataLabels: {
            enabled: true,
          },
          colors:['#5c0312','#a9fc03', '#03fc6f','#03f4fc','#13303b','#0e173b','#8e3fb0','#a81b5f','#fc7b03']
        },

    };
  },
  components: {
    Icon,
    AppAccordion,
    "vue3-slider": slider 
  },
  created() {
    this.min = 0
    this.max = 250
    this.formatter = value => `￥${value}`
  },
  methods: {
    chooseStd: function () {
      console.log("HI!" + this.text);
      this.doSearch(0, 47, "id", "asc", this.text);
    },

    newGradePerStudent: function(percentage){
      let myLabels=[];
       this.optionsDonut.labels=[];
      console.log(this.optionsDonut.labels);
     // this.optionsDonut.$forceUpdate();
      this.seriesDonut=[];
      //this.optionsDonut.labels=[];
       axios
      .get("http://127.0.0.1:8080/exams/product management/stats?percentage=" +percentage)
      .then((response) => {
        var gradeDist = response.data['gradeDistribution'];
        var gradeDistArr = Object.keys(gradeDist).map((key) => [Number(key), gradeDist[key]]);
     
      for (let i = 0; i < gradeDistArr.length; i++) 
      {
          
         
          console.log(gradeDistArr[i][0]);
          this.seriesDonut.push(Number(gradeDistArr[i][1]));
          myLabels.push(Number(gradeDistArr[i][0]));

      }
      }); 
      this.optionsDonut = 
      {
        labels : myLabels,
          chart: {
            type: "donut",
          },
          legend: {
            show: true,
          },
          dataLabels: {
            enabled: true,
          },
         colors:['#d91623','#a9fc03', '#03fc6f','#03f4fc','#13303b','#0e173b','#8e3fb0','#a81b5f','#fc7b03']
      } 
    },
      rangeChanged: function(event){
        
        let percentage=0;
        percentage = event.target.value;  
        this.getOveralResults(percentage/100);
        this.percentage = percentage;
       // this.gradePerStudent(percentage/100);
        this.newGradePerStudent(percentage/100);

      }
  },
  mounted() {
    this.getOveralResults(0.5);
    //this.gradePerStudent(0.5);
    this.newGradePerStudent(0.5);
  },
};
</script>
<style>
.slider {
  /* overwrite slider styles */
  width: 200px;
}
</style> 