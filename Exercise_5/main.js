let Student = /** @class */ (function () {
  function Student(studentName, studentAge, studentGrade) {
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
  }
  Student.prototype.displayInfo = function () {
    console.log(this.studentName, this.studentAge, this.studentGrade);
  };
  Student.prototype.isPassing = function (gradeThreshold) {
    if (this.studentGrade >= gradeThreshold) {
      return console.log("Passing");
    } else {
      return console.log("Failing");
    }
  };
  return Student;
})();
const joshua = new Student("Joshua", 26, 75);
joshua.displayInfo();
joshua.isPassing(59);
const max = new Student("Max", 45, 45);
max.displayInfo();
max.isPassing(59);
