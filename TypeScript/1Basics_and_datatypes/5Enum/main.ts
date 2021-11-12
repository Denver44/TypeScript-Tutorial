enum Job {
  FULLTIME = 10,
  PART_TIME,
  INTERNSHIP,
}

let obj = {
  name: "Denver",
  age: 22,
  hobbies: ["cricket", "calisthenics"],
  Job: Job.FULLTIME,
};
let obj2 = {
  name: "Denver2",
  age: 22,
  hobbies: ["cricket", "calisthenics"],
  Job: Job.PART_TIME,
};

console.log(obj.Job);
console.log(obj2.Job);

// We can give our own incrementing number.
// We can give string or number to it
// Example: enum Job {  FULLTIME = 10,  PART_TIME = "MONEY", INTERNSHIP ="LEARNING PHASE",}
