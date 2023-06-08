let totalSum = 0;
const resultFieldTop = document.getElementById('resultFieldTop');
const resultFieldBottom = document.getElementById('resultFieldBottom');

// Function for calculating the total amount
function calculateTotalSum() {
  totalSum = 0;

  // get all inputs of the number type
  const numberInputs = document.querySelectorAll('input[type="number"]');

  // loop through each input and add its value to the total
  numberInputs.forEach(input => {
	// Check if the id contains the value "id_incomingproduct_set-"
	if (input.id.includes("id_incomingproduct_set-")) {
	  const value = parseFloat(input.value) || 0; //convert value to a number, if possible
	  totalSum += value;
	}
  });

  // console.log(totalSum);
  resultFieldTop.textContent = totalSum; // Update field value
  resultFieldBottom.textContent = totalSum; // Update field value
}

// Add an input event handler for all inputs with type number
document.addEventListener('input', function(event) {
  const target = event.target;
  if (target.tagName === 'INPUT' && target.type === 'number') {
	calculateTotalSum();
  }
});
calculateTotalSum();