const employees = [
    {
     firstName: 'Alex',
     lastName: 'Smith',
     age: 54,
     salary: 10000,
     position: 'Architect'
    },
    {
     firstName: 'Gustav',
     lastName: 'Andersen',
     age: 31,
     salary: 5000,
     position: 'Software engineer'
    },
    {
     firstName: 'Liz',
     lastName: 'Taylor',
     age: 20,
     salary: 7000,
     position: 'Manager'
    }
]

const reduceCallback = function (acc, item){
    return acc + item.salary;
}

const overallSalary =  employees.reduce(reduceCallback, 0);
const averageSalary = overallSalary / employees.length;

const sortSalary = employees.sort(function (a, b){
    return a.salary - b.salary; 
});

const employeesSalaryAge = employees.filter(function(item){
    return item.salary > 4500 && item.age > 25;
});

console.log(averageSalary, sortSalary, employeesSalaryAge);