// Get a reference to the #add-employees-btn element.
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// declared employees data at global scope
let employeesArray = [];
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // let addAnother = break the loop
  let addAnother = true;
  while (addAnother) {
    let newEmployee = {
      firstName: prompt('Please enter the new emplyoees First Name:').toUpperCase(),
      lastName: prompt('Please nter the new employees Last Name:').toUpperCase(),
      salary: parseInt(prompt('Please enter the new employees Annual Salary:'))
    }
    // Validate user inputs - if any are empty, display error message.
    if (isNaN(newEmployee.salary)) {
      salary = 0;
      alert('Invalid value entered!')
    }
    
    // Add new employee object to employeesArray using push method
    employeesArray.push(newEmployee);
    addAnother = confirm("Do you want to add another employee?");

  }
  //  Return the finalized employeesArray
  return employeesArray; 
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let totalSalary = 0;
  // I made loop to calcualate total salary
  for (let i=0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  
  // Calculate average by dividing total by number of employees
  const averageSalary = (totalSalary / employeesArray.length);
  // It will display the average salary in console
  console.log(`The Average Salary is: ${averageSalary}`);
  
};


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // Generate a randomEmployee index  between 0 and length of array 
  const randomEmployee = Math.floor(Math.random() * employeesArray.length);

  //  Displaying randomly selected employee on the console 
  const selectedEmployee = employeesArray[randomEmployee];
  console.log(`Congratulations to ${selectedEmployee.firstName}, our random Employee of the Month!`);
};  






/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
