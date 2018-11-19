


export class Cohort {
  protected name: string;
  students []: Student;
  mentors []: Mentor;


  constructor(name, students: Student = [], mentors: Mentor = []){
    this.name = name;
    this.students = students;
    this.mentors = mentors;
  }
  addStudent(Student){
    students.push(Student);
  }

  addMentor(Mentor){
    mentors.push(Mentor);
  }

  info(name, students, mentors){
    console.log(`The ${this.name} cohort has ${this.students.size()} students and ${this.mentors.size()} mentors.`);
  }
}