const employee = {
  name: "Valentine",
  streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

// Example usage:
const updatedEmployee = updateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "Mombasa"
);
console.log(updatedEmployee);
console.log(employee);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

const updatedEmployeed = destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "Mombasa"
);

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };

  delete newEmployee[key];

  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];

  return employee;
}
