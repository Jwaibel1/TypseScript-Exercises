class Student {
  constructor(
    public studentName: string,
    public studentAge: number,
    private studentGrade: number
  ) {}

  displayInfo() {
    console.log(
      `${this.studentName} is ${this.studentAge} years old with a grade average of ${this.studentGrade}%`
    );
  }

  isPassing(gradeThreshold: number) {
    if (this.studentGrade >= gradeThreshold) {
      return console.log("Passing");
    } else {
      return console.log("Failing");
    }
  }
}

const joshua = new Student("Joshua", 26, 75);
joshua.displayInfo();
joshua.isPassing(59);
const max = new Student("Max", 45, 45);
max.displayInfo();
max.isPassing(59);
