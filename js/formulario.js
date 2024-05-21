
const name = document.getElementById('name').value;

const email = document.getElementById('email').value;
const age = document.getElementById('age').value;
const gender = document.getElementById('gender').value;
const mensaje = document.getElementById('mensaje').value;
function validateForm() {
	let isValid = true;
	if (name.trim() === '') {
		document.getElementById('nameError').innerText = 'El nombre es obligatorio';
		isValid = false;
	} else {
		document.getElementById('nameError').innerText = '';
	}

	if (email.trim() === '') {
		document.getElementById('emailError').innerText = 'El correo electrónico es obligatorio';
		isValid = false;
	} else {
		document.getElementById('emailError').innerText = '';
	}

	if (age.trim() === '' || isNaN(age) || age <= 0) {
		document.getElementById('ageError').innerText = 'La edad es obligatoria y debe ser un número positivo';
		isValid = false;
	} else {
		document.getElementById('ageError').innerText = '';
	}

	if (gender === '') {
		document.getElementById('genderError').innerText = 'El género es obligatorio';
		isValid = false;
	} else {
		document.getElementById('genderError').innerText = '';
	}

	if (mensaje.trim() === '') {
		document.getElementById('mensajeError').innerText = 'El mensaje es obligatorio';
		isValid = false;
	} else {
		document.getElementById('mensajeError').innerText = '';
	}

	return isValid;
}