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
  </div>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by Student ID"
          v-model="studentId"
        />
        <div class="input-group-append">
          <button
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            type="button"
            @click="searchId"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Students List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(student, index) in students"
          :key="index"
          @click="setActiveStudent(student, index)"
        >
          {{ student.id }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentStudent">
        <h4>Student Details</h4>
        <div>
          <label><strong>StudentID:</strong></label>
          {{ currentStudent.studentId }}
        </div>
        <div>
          <label><strong>Language of Examination:</strong></label>
          {{ currentStudent.lang }}
        </div>
        <div>
          <label><strong>Question Type:</strong></label>
          {{ currentStudent.questionType }}
        </div>
        <div>
          <label><strong>Question ID:</strong></label>
          {{ currentStudent.questionId }}
        </div>
        <div>
          <label><strong>Question:</strong></label>
          {{ currentStudent.questionName }}
        </div>
        <div>
          <label><strong>Correct Answer:</strong></label>
          {{ currentStudent.correctAnswer }}
        </div>
        <div>
          <label><strong>Standard Point:</strong></label>
          {{ currentStudent.standardPoint }}
        </div>
        <div>
          <label><strong>Maximum Point:</strong></label>
          {{ currentStudent.maximumPoint }}
        </div>
        <div>
          <label><strong>Evaluated:</strong></label>
          {{ currentStudent.evaluated }}
        </div>
        <div>
          <label><strong>Question Language:</strong></label>
          {{ currentStudent.questionlanguage }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentStudent.edited ? "Edited" : "Pending" }}
        </div>
        <router-link
          :to="'/evaluation/' + currentStudent.id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Student...</p>
      </div>
    </div>
  </div>
</template>
<script>
import StudentReport from "../../services/StudentReport";

/* async function sampleData1(offst, limit, std) {
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
          canswer: response.data["questions"][i - 1]["correct"],
          ganswer: response.data["questions"][i - 1]["answer"],
          stdpoints: response.data["questions"][i - 1]["stdPoints"],
          maxpoints: response.data["questions"][i - 1]["maxPoints"],
        });
      }
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
} */
export default {
  name: "student-list",
  data() {
    return {
      students: [],
      currentStudent: null,
      currentIndex: -1,
      studentId: "",
    };
  },
  methods: {
    retrieveStudents() {
      StudentReport.getAll()
        .then((response) => {
          this.students = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveStudents();
      this.currentStudent = null;
      this.currentIndex = -1;
    },
    setActiveStudent(student, index) {
      this.currentStudent = student;
      this.currentIndex = student ? index : -1;
      
    },
  },
  mounted() {
    this.retrieveStudents();
  },
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
  color: ghostwhite;
}
</style>
