import { Student } from "./students";

export class Teacher {

  teach(student: Student): void {
    student.learn();
  }
  answer(): void { }
}