import http from "./http-common";
class StudentReport {
  getAll() {
    return http.get("/students");
  }
  get(id) {
    return http.get(`/students/${id}/reports`);
  }
  update(id, data) {
    return http.put(`/students/${id}/questions/${questions.questionID}?p=${newPoints}`, data); 
    // http://127.0.0.1:8080/exams/product management/students/5/questions/8?p=4
    // students/<studentID>/questions/<questionID>?p=<newPoints>
  }
}
export default new StudentReport();