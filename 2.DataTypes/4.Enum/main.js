var Job;
(function (Job) {
    Job[Job["FULLTIME"] = 10] = "FULLTIME";
    Job[Job["PART_TIME"] = 11] = "PART_TIME";
    Job[Job["INTERNSHIP"] = 12] = "INTERNSHIP";
})(Job || (Job = {}));
var obj = {
    name: "Denver",
    age: 22,
    hobbies: ["cricket", "calisthenics"],
    Job: Job.FULLTIME
};
var obj2 = {
    name: "Denver2",
    age: 22,
    hobbies: ["cricket", "calisthenics"],
    Job: Job.PART_TIME
};
console.log(obj.Job);
console.log(obj2.Job);
// We can give our ouwn incrementing number.
// We can give string or number to it
// Example: enum Job {  FULLTIME = 10,  PART_TIME = "MONEY", INTERNSHIP ="LEARNING PHASE",}
