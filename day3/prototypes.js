function Trainee(id, name, batch, preferredSkillSet) {
  this.id = id;
  this.name = name;
  this.batch = batch;
  this.preferredSkillSet = preferredSkillSet;
}

Trainee.prototype.getPreferredSkillSet = function () {
  return this.preferredSkillSet.join(", ");
};

const trainee1 = new Trainee(1, "John Doe", "2022 April Batch", [
  "Java",
  "NodeJS",
]);

console.log(trainee1);
console.log(trainee1.getPreferredSkillSet());

const javaTrainee = Object.create(trainee1);
javaTrainee.isBackendDeveloper = true;
console.log(javaTrainee);
console.log(javaTrainee.name);
