export function getTodoItem({ id, name, status, onDelete, onUpdate }) {
  const element = document.createElement('div');

  element.append(getCheckbox({ status, onClick: onUpdate }));
  element.append(name);
  element.append(getDeleteButton({ onClick: onDelete }))
  return element;
}

export function getDeleteButton ({ onClick }) {
  const button = document.createElement('button');
  button.innerHTML = 'Remover';

  button.onclick = () => {
    button.disabled = 'disabled';
    onClick();
  };

  return button;
}

export function getCheckbox({ status, onClick }) {
  const button = document.createElement('button');
  button.innerHTML = status === 'pending' ? 'complete' : 'undo';

  button.onclick = () => {
    onClick();
  };

  return button;
}