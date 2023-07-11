const baseUrl = 'http://localhost:3000';

const path = {
  employee: '/employees',
  comments: '/comments',
}

// [{ key: 'role', value: 'manager'}]
const generateQueryString = (queryParams = []) => queryParams.length
? `?${queryParams.map(x => `${x.key}=${x.value}`).join('&')}` 
: '';

const getEmployees = async(queryParams) => {
  const response = await fetch(`${baseUrl}${path.employee}${generateQueryString(queryParams)}`);
  //const data = await response.json();
  const items = await response.json();

  const count = Number(response.headers.get('X-Total-Count'));
  //console.log('response', response.headers.get('X-Total-Count'));
  //console.log(data)
  return { items, count};
};

const getEmployee = async(id) => {
  const response = await fetch(`${baseUrl}${path.employee}/${id}`);
  const employee = await response.json();

  return employee;
};

const createEmployee = async(body) => {
  const response = await fetch(`${baseUrl}${path.employee}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const employee = await response.json();

  return employee;
};

const updateEmployee = async(id, body) => {
  const response = await fetch(`${baseUrl}${path.employee}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const employee = await response.json();

  return employee;
};

const updateEmployeeParam = async(id, body) => {
  const response = await fetch(`${baseUrl}${path.employee}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const employee = await response.json();

  return employee;
};

const deleteEmployee = async(id) => {
  const response = await fetch(`${baseUrl}${path.employee}/${id}`, {
    method: 'DELETE',
  });
  const employee = await response.json();

  return employee;
};

//getEmployees([{ key: 'role', value: 'manager'}, { key: 'active', value: true }]);
getEmployees([{ key: '_page', value: '2'}, { key: '_limit', value: 1 }]);

//const main = async () => {
// const employees = await getEmployees([{ key: '_page', value: '1'}, { key: '_limit', value: 1 }]);

// console.log(employees)
//}
//main();

//const main = async () => {
//  const employee = await getEmployee(4);
 
//  console.log(employee)
// }
//main();

//const main =  async () => {
//  const employee = await createEmployee({
//    name: 'Alex',
//    role: 'HR',
//    salary: 1300,
//    active: false,
//  });
 
//  console.log(employee)
// }
//main();

//const main =  async () => {
//  const employee = await updateEmployee(6,{
//    name: 'Paul',
//    role: 'director',
//    salary: 3300,
//    active: true,
//  });
 
//  console.log(employee)
// }
//main();

const main =  async () => {
  const employee = await deleteEmployee(5)
 
  console.log(employee)
 }
main();