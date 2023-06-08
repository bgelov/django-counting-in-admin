# django-counting-in-admin
Javascript for counting numeric values on change_form.html template in Django administrative interface.

![how-does-it-work](https://github.com/bgelov/django-counting-in-admin/assets/5302940/26d59f1b-e7d3-4d85-b626-bef9bdbd87e6)


## How to use it?

templates -> admin -> <app_name> -> <model_name> -> change_form.html

```
...

{% block after_field_sets %}
    <!--- Add section for counting result--->
    <div class="submit-row">
        <span>Total: <span id="resultFieldTop">0</span></span>
    </div>
    <!--- End section for counting result --->
{% endblock %}

...

{% block submit_buttons_bottom %}{% submit_row %}

    <!--- Add section for counting result--->
    <div class="submit-row">
        <span>Total: <span id="resultFieldBottom">0</span></span>
    </div>
    <!--- End section for counting result --->

    <!--- Script for counting input sum ---->
    <script>
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
    </script>
    <!--- End script for counting input sum ---->

{% endblock %}

...
```
