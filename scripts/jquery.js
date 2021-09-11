$(document).ready(function(){

  const form = $('#user-form');
  const inputId = $('#user-form__input-id');
  const inputName = $('#user-form__input-name');
  const inputSurname = $('#user-form__input-surname');
  const inputAge = $('#user-form__input-age');

  function User(id, name, surname, age) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  let listUser = [];

  function saveToStorage(key, user) {
    listUser.push(user);
    localStorage.setItem(key, JSON.stringify(listUser));
  }

  function getUserFromStorage(key) {
    if(localStorage.getItem(key)){
      return JSON.parse(localStorage.getItem(key));
    }
  }

  form.submit(function(event) {
    event.preventDefault();

    const id = inputId.val();
    const name = inputName.val();
    const surname = inputSurname.val();
    const age = inputAge.val();

    const user = new User(id, name, surname, age);

    if(!localStorage.getItem('users')){
      createTable('body', 'user-table');
      createTableHeader(['Id', 'Nombre', 'Apellido', 'Edad'], '#user-table');
    }

    saveToStorage('users', user);

    createRowUser(user, '#user-table');

  });

  if(localStorage.getItem('users')){
    createTable('body', 'user-table');
    createTableHeader(['Id', 'Nombre', 'Apellido', 'Edad'], '#user-table');
    populateRows(getUserFromStorage('users'), '#user-table');
  }

  function createTable(element, id) {
    const table = `<table id=${id}></table>`;
    $(element).append(table);
  }

  function createTableHeader(data, element) { 
    const header = `<tr>${createDataHeader(data)}</tr>`;
    $(element).append(header);
  }

  function createDataHeader(data) {
    return data.map(headerData => `<th>${headerData}</th>`);
  }

  function createRowUser(user, element){
    const row = `<tr id=tr-${user.id}>
      ${populateTableData(user.id, user.name, user.surname, user.age)}
    </tr>`;
    $(element).append(row);
  }

  function populateRows(data, element){
    data.map(user => {
      createRowUser(user, element);
    });
  }

  function populateTableData(id, name, surname, age){ 
    return `
    <td>${id} </td>
    <td>${name} </td>
    <td> ${surname} </td>
    <td>${age}</td>
    `
  }
});




