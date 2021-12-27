interface CourseGoal {
  title: string;
  desc: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  // let us we have to do some validation
  courseGoal.title = title;
  courseGoal.desc = desc;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// name.push("mona");

// This partial function helps us in lot many ways some time to restrict like readonly restrict us to add or remove anything from the array whereas the Partial helps us to add our title and date as per custom validation
