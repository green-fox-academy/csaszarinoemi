import { Student } from "./student"
import { Mentor } from "./mentor"


export class Cohort {
  protected name: string;
  students: Student[];
  mentors: Mentor[];


  constructor(name, students: Student[] = [], mentors: Mentor[] = []) {
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }
  addStudent(Student) {
    this.students.push(Student);
  }

  addMentor(Mentor) {
    this.mentors.push(Mentor);
  }

  info(name, students, mentors) {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}