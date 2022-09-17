import { listTodos } from './api';

function getNewTodoName() {
  const input = document.querySelector('[name=new-todo-name]')
  return input.value;
}

export function listenSubmit() {
  const button = document.getElementById('new-todo');
  button.onclick = () => {
    const inputValue = getNewTodoName();
    // TODO: salvar na api
    // TODO: atualizar lista
    console.log('button clicked', inputValue)
  }
}

async function refreshTodoList() {
  const todoList = await listTodos();
  const todoElements = document.getElementById('todo-list');
  console.log({todoList, todoElements});
}

export function loadTodoList() {
  refreshTodoList()
}