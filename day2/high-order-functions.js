const employees = [
    { id: 1, name: 'John Doe', salary: 4000, skills: ['Java', '.NET'] },
    { id: 3, name: 'Mike Doe', salary: 2500, skills: ['Python', 'JavaScript'] },
    { id: 2, name: 'Jane Doe', salary: 24000, skills: ['HTML'] },
];

// print all the names
employees.forEach((v) => console.log(v.name))
// join all the names with comma
console.log(employees.map((e) => e.name).join(', '))
// get total salary of all the employees
console.log(employees.map((e) => e.salary).reduce((p, c) => p + c, 0))
// get employees with salary > 15000
console.log(employees.filter((employee) => employee.salary > 15000));
// return true if there is an employee whose salary < 12000
console.log(employees.some((e, i) => {
    console.log(`Index at: ${i}`);
    return e.salary < 12000;
}));
// return true if there all employees have salary > 5000
console.log(employees.every((e, i) => {
    console.log(`Index at: ${i}`);
    return e.salary > 5000;
}));
// find possible skill sets based on the employee array data.
console.log(employees.map((e) => e.skills).flat());
// flatMap: find possible skill sets based on the employee array data
console.log(employees.flatMap((e) => e.skills));
// find an employee whose name is John
console.log(employees.find((e) => e.name.includes('John')));
// sort employee array by salary in an ascending order
console.log(employees); 
employees.sort((a, b) => a.salary - b.salary);
console.log(employees); 
