let myLongString: string = `name;type;date
Joe;student;2010-09-03
Ann;mentor;2010-09-03
Bob;student;2010-09-03
Pete;student;2010-09-03
Joe;student;2010-09-04
Bill;mentor;2010-09-04
Joe;student;2010-09-04
Pete;student;2010-09-04
Ann;mentor;2010-09-05
Joe;student;2010-09-05
Ann;mentor;2010-09-05
Joe;student;2010-09-06
Joe;student;2010-09-06
Pete;student;2010-09-07`;

function buildingUsage(input: string): string {
  let mentorCounter: number = 0;
  let studentCounter: number = 0;
  let inputArray:string[] = input.split("\n");
  for (let e of inputArray) {
    if(e.split(";")[1] === "mentor" ){
      mentorCounter++;
    } else if (e.split(";")[1]=== "student"){
      studentCounter++;
    }
  } return `Building usage Students: ${studentCounter}, Mentors: ${mentorCounter}`;
}
console.log(buildingUsage(myLongString));