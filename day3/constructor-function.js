function Trainee(id, name, batch, preferredSkillSet) {
  this.id = id;
  this.name = name;
  this.batch = batch;
  this.preferredSkillSet = preferredSkillSet;
}

const trainee1 = new Trainee(1, "John Doe", "2022 April Batch", [
  "Java",
  "NodeJS",
]);

console.log(trainee1);
