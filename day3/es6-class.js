class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Trainee extends Person {
  constructor(id, name, batch, preferredSkillSet) {
    super(id, name);
    this.batch = batch;
    this.preferredSkillSet = preferredSkillSet;
  }
}

const trainee1 = new Trainee(1, "John Doe", "2022 April Batch", [
  "Java",
  "NodeJS",
]);

console.log(trainee1);
