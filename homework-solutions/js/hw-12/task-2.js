const API_URL = 'https://jsonplaceholder.typicode.com/todos';

async function addNewTask(taskDetails) {
  try {
    const serverResponse = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(taskDetails),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    });

    if (!serverResponse.ok) {
      throw new Error(`Ошибка сервера: ${serverResponse.status}`);
    }
    const createdTask = await serverResponse.json();
    const fields = Object.keys(taskDetails);
    const mismatch = fields.find(field => {
      return taskDetails[field] !== createdTask[field];
    });

    if (mismatch) {
      throw new Error(`Несовпадение данных. Поле ${mismatch}: отправлено ${taskDetails[mismatch]}, получено ${createdTask[mismatch]}`);
    }

    return createdTask;

  } catch (error) {
    console.error('Произошла ошибка:', error.message);
    throw new Error('Не удалось создать задачу');
  } finally {
    console.log('Завершение работы модуля создания задач');
  }
}

const task = {
  userId: 1,
  title: "Обломиться",
  completed: false
};

addNewTask(task)
  .then(result => console.log('Создана задача:', result))
  .catch(error => console.error('Ошибка создания:', error));