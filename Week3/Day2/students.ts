import { Teacher } from "./teachers";

export class Student {

  learn(): void { }

  question(teacher: Teacher): void {
    teacher.answer();
  }
}

/*Create Student and Teacher classes
Student
learn()
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer()*/