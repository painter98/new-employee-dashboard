

let count=1;
let employeeList = [];

function add(){
    let name = document.getElementById('name');
    let profession = document.getElementById('profession');
    let age = document.getElementById('age');

    if(name.value==='' || profession.value==='' || age.value===''){ //if any of input value is empty then the error message displays
         document.getElementById('error').style.display = 'block';
         document.getElementById('success').style.display = 'none'; 
    }
    else{
        document.getElementById('error').style.display = 'none'; //all the values are inputed and addition to list is successful
        document.getElementById('success').style.display = 'block';
        document.getElementById('empty').style.display = 'none';

        let employee = {}; //creating object
        employee.serial = count;
        employee.Name = name.value;
        employee.Profession = profession.value;
        employee.Age = age.value;

        employeeList.push(employee); //appending the object to array

        let list = document.createElement('li'); //appending the list of employees
        let text = `${employeeList[count-1].serial}    Name:${employeeList[count-1].Name}    Profession:${employeeList[count-1].Profession}    Age:${employeeList[count-1].Age}`;
        
        document.getElementById('employee-list').appendChild(list).setAttribute("id", `${count}`);;
        list.innerHTML = `${text} <button onclick="deleteUser(${count})" id="delete">Delete</button>`
        //console.log(employeeList[count-1]); 
    }
    ++count;
    //console.log(count,employeeList);
}
function deleteUser(id){
  //console.log('delete here',id);
  let itemToBeRemoved = document.getElementById(id);
  //console.log(itemToBeRemoved);
  itemToBeRemoved.parentNode.removeChild(itemToBeRemoved);
}