<template>
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
              >Evaluation</a
            >
          </div>
        </li>
      </ol>
    </nav>
  <div class="grid grid-cols-1 mt-5 ml-2 gap-5">
    <div class="card w-full p-5 rounded-md bg-white dark:bg-gray-800">
      
      <div class="wrapper-button w-full box-border mt-4">
        <div
          class="card p-8 max-w-full text:center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Edit Student Score
            </h5>
          </a>

          <div class="mt-5 w-full">
            
            <input
              v-model="text"
              size="10"
              required
              placeholder="Enter Student ID"
              class="p-3 w-full bg-black dark:bg-gray-900 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"

            />&nbsp;
            <input
              v-model="questionId"
              size="10"
              required
              placeholder="Enter Question Id"
              class="p-3 w-full bg-white dark:bg-gray-900 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"

            /><br><br>
            <button
              type="button"
              @click="chooseStd"
              class="py-2.5 px-8 mr-2 mb-2 ml-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
            <th scope="col" class="uppercase px-1 py-1">Student ID</th>
            <th scope="col" class="uppercase px-1 py-1">Question Number</th>

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
            <th scope="col" class="uppercase px-6 py-1">Points std</th>
            <th scope="col" class="uppercase px-1 py-1">Maximum std</th>
            
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50"
            v-for="question in student"
            :key="question.id"
          >
            <td class="px-6 py-4">
              {{ question.mtr }}
            </td>
            <td class="px-6 py-4">
              {{ question.id }}
            </td>
            <td class="px-6 py-4">
              <app-accordion>
                <template v-slot:title> Question</template>
                <template v-slot:content>
                  {{ question.qname }}
                </template>
              </app-accordion>
            </td>
            <td class="px-6 py-4">
              <app-accordion>
                <template v-slot:title> Correct Answer</template>
                <template v-slot:content>
                  {{ question.canswer }}
                </template>
              </app-accordion>
            </td>
            <td class="px-6 py-4">
              <app-accordion>
                <template v-slot:title> Given Answer</template>
                <template v-slot:content>
                  {{ question.ganswer }}
                </template>
              </app-accordion>
            </td>
             <td class="px-6 py-4 ">
              <input
                type="text"
                size="5"
                @change="pointsChanged(question)"
                v-model="question.stdPoint"
              />
            </td>
            <td class="px-6 py-4">
              {{ question.qPoint }}
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
</template>
<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue";
import { reactive } from "vue";
import axios from "axios";
import AppAccordion from "../../components/AppAccordion.vue";

var questions;

function chooseStd() {
  console.log("did it");
  return true;
}

async function getQuestions() {
  let data = [];
  return await axios
    .get("http://127.0.0.1:8080/exams/product management/questions")
    .then((response) => {
      response.data["questions"].forEach((element) => {
        data.push({
          id: element["questionID"],
          questionDE: element["questionDE"],
          questionEN: element["questionEN"],
          correctDE: element["correctDE"],
          correctEN: element["correctEN"],
          points: element["points"],
        });
      });
      return data;
    });
}
async function sampleData1(offst, limit, std, qId, questions) {
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
          if (
            qId !== "" &&
            response.data["questions"][i - 1]["questionID"] == qId
          ) {
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
          }
          if (qId === "") {
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
          }
          console.log(data);
        }
        return data;
      })
      .catch((err) => console.log(err));
  }
  if (std === "" && qId !== "") {
    return await axios
      .get(
        "http://127.0.0.1:8080/exams/product management/questions/" +
          qId +
          "/responses"
      )
      .then((response) => {
        console.log(response);
        let data = [];
        offst = offst + 1;
        let chosenQuestion = questions.filter((el) => el["id"] === qId);

        for (let i = offst; i <= limit; i++) {
          data.push({
            id: qId,
            qname: chosenQuestion[0]["questionEN"],
            canswer: chosenQuestion[0]["correctEN"],
            ganswer: response.data[i - 1]["response"],
            stdPoint: response.data[i - 1]["stdPoints"],
            qPoint: chosenQuestion[0]["points"],
            //points: '',
            mtr: response.data[i - 1]["mtr"],
          });
        }
        return data;
      });
  }
}

async function updateStudentPoints(updateInfo) {
  for (let i = 0; i < updateInfo.StdPoints.length; i++) {
    axios
      .put(
        "http://127.0.0.1:8080/exams/product management/students/" +
          updateInfo.mtr +
          "/questions/" +
          updateInfo.QuestionIds[i] +
          "?p=" +
          updateInfo.StdPoints[i]
      )
      .then((response) => {
        console.log(response);
      });
  }

  return null;
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

    async function doSearch(offset, limit, order, sort, std, questionId) {
      if (offset >= 47) {
        limit = offset + 47;
      }
      this.questions = await getQuestions();
      console.log(this.questions);
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
    };
  },
  data() {
    return {
      toBeChangedPoints: {
        mtr: "",
        QuestionIds: [],
        StdPoints: [],
        valid: true,
      },
      student: {},
      text: "",
      stdPoint: "",
      uniqueQuestionIds: [],
      questionId: "",
      questions: {},
    };
  },
  components: {
    Icon,
    AppAccordion,
  },
  methods: {
    chooseStd: function () {
      console.log("HI!" + this.text);
      this.doSearch(0, 47, "id", "asc", this.text, this.questionId);
    },

    pointsChanged: function (question) {
      console.log(question["mtr"]);
      console.log(question["stdPoint"]);
      console.log(question["id"]);
      if (question["stdPoint"] <= question["qPoint"]) {
        this.toBeChangedPoints.QuestionIds.push(question["id"]);
        this.toBeChangedPoints.mtr = question["mtr"];
        this.toBeChangedPoints.StdPoints.push(question["stdPoint"]);
        console.log(this.toBeChangedPoints);
      } else {
        alert("badInput");
      }
    },

    submitNewPoints: function () {
      for (let i = this.toBeChangedPoints.QuestionIds.length - 1; i >= 0; i--) {
        if (
          this.uniqueQuestionIds.includes(this.toBeChangedPoints.QuestionIds[i])
        ) {
          this.toBeChangedPoints.QuestionIds.splice(i, 1);
          this.toBeChangedPoints.StdPoints.splice(i, 1);
        } else {
          this.uniqueQuestionIds.push(this.toBeChangedPoints.QuestionIds[i]);
        }
      }
      console.log(this.toBeChangedPoints);
      updateStudentPoints(this.toBeChangedPoints);
    },
  },
  mounted() {},
};
</script>
