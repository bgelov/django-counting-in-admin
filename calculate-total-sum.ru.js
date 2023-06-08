let totalSum = 0;
const resultFieldTop = document.getElementById('resultFieldTop');
const resultFieldBottom = document.getElementById('resultFieldBottom');

// Функция для подсчета общей суммы
function calculateTotalSum() {
  totalSum = 0;

  // Получить все input с типом number
  const numberInputs = document.querySelectorAll('input[type="number"]');

  // Пройтись по каждому input и добавить его значение к общей сумме
  numberInputs.forEach(input => {
	// Проверить, содержит ли id значение "id_incomingproduct_set-"
	if (input.id.includes("id_incomingproduct_set-")) {
	  const value = parseFloat(input.value) || 0; // Преобразовать значение в число, если возможно
	  totalSum += value;
	}
  });

  // console.log(totalSum);
  resultFieldTop.textContent = totalSum; // Обновление значения поля
  resultFieldBottom.textContent = totalSum; // Обновление значения поля
}

// Добавить обработчик события input для всех input с типом number
document.addEventListener('input', function(event) {
  const target = event.target;
  if (target.tagName === 'INPUT' && target.type === 'number') {
	calculateTotalSum();
  }
});
calculateTotalSum();