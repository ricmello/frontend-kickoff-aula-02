export const BASE_URL = 'http://localhost:3000'


export async function listTodos() {
  const response = await fetch(`${BASE_URL}/todo`);
  return await response.json();
}

export function saveTodo(todo) {

}