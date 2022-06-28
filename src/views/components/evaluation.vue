<template>
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
              >Evaluation</a
            >
          </div>
        </li>
      </ol>
    </nav>
  </div>
  <div v-if="currentStudent" class="edit-form">
    <h4>Student Details</h4>
    <form>
      <div class="form-group">
        <label for="studentId">Student ID</label>
        <input
          type="text"
          class="form-control"
          id="studentId"
          v-model="currentStudent.studentId"
        />
      </div>
      <div class="form-group">
        <label for="lang">Student Medium of Examination</label>
        <input
          type="text"
          class="form-control"
          id="lang"
          v-model="currentStudent.lang"
        />
      </div>
      <div class="form-group">
        <label for="questionType">Student Medium of Examination</label>
        <input
          type="text"
          class="form-control"
          id="questionType"
          v-model="currentStudent.questionType"
        />
      </div>
      <div class="form-group">
        <label for="questionId">Student Medium of Examination</label>
        <input
          type="text"
          class="form-control"
          id="questionId"
          v-model="currentStudent.questionId"
        />
      </div>
      <div class="form-group">
        <label for="currentStudent.questionName"
          >Student Medium of Examination</label
        >
        <input
          type="text"
          class="form-control"
          id="questionName"
          v-model="currentStudent.questionName"
        />
      </div>
      <div class="form-group">
        <label for="correctAnswer">Student Medium of Examination</label>
        <input
          type="text"
          class="form-control"
          id="correctAnswer"
          v-model="currentStudent.correctAnswer"
        />
      </div>
      <div class="form-group">
        <label for="standardPoint">Standard Point</label>
        <input
          type="text"
          class="form-control"
          id="standardPoint"
          v-model="currentStudent.standardPoint"
        />
      </div>
      <div class="form-group">
        <label for="maximumPoint">Maximum Point</label>
        <input
          type="text"
          class="form-control"
          id="maximumPoint"
          v-model="currentStudent.maximumPoint"
        />
      </div>
      <div class="form-group">
        <label for="evaluated">Evaluated</label>
        <input
          type="text"
          class="form-control"
          id="evaluated"
          v-model="currentStudent.evaluated"
        />
      </div>
      <div class="form-group">
        <label for="questionlanguage">Question Language</label>
        <input
          type="text"
          class="form-control"
          id="questionlanguage"
          v-model="currentStudent.questionlanguage"
        />
      </div>
      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentStudent.edited ? "Edited" : "Pending" }}
      </div>
    </form>
    <button
      class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      v-if="currentStudent.edited"
      @click="updateEdited(false)"
    >
      UnEdited
    </button>
    <button
      v-else
      class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
      @click="updateEdited(true)"
    >
      Edited
    </button>
    <button
      type="submit"
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      @click="updateStudent"
    >
      Update Score
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on the Student ID...</p>
  </div>
</template>
<script>
import StudentReport from "../../services/StudentReport";

export default {
  name: "student",
  data() {
    return {
      currentStudent: null,
      message: "",
    };
  },
  methods: {
    getStudent(id) {
      StudentReport.get(id)
        .then((response) => {
          this.currentStudent = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateEdited(status) {
      var data = {
        studentId: this.currentStudent.studentId,
        lang: this.currentStudent.lang,
        questionType: this.currentStudent.questionType,
        questionId: this.currentStudent.questionId,
        questionName: this.currentStudent.questionName,
        questioncorrectAnswer: this.currentStudent.correctAnswer,
        standardPoint: this.currentStudent.standardPoint,
        maximumPoint: this.currentStudent.maximumPoint,
        evaluated: this.currentStudent.evaluated,
        questionLanguage: this.currentStudent.questionLanguage,
        edited: status,
      };
      StudentReport.update(this.currentStudent.standardPoint, data)
        .then((response) => {
          console.log(response.data);
          this.currentStudent.standardPoint = { newPoints };
          this.message = "The score has been updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateStudent() {
      StudentReport.update(this.currentStudent.studentId, this.currentStudent)
        .then((response) => {
          console.log(response.data);
          this.message = "The student score was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getStudent(this.$route.params.id);
  },
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
