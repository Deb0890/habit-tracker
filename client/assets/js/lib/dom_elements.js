const { deleteHabit, postCompletion, deleteCompletion } = require('./requests');

function createLoginForm() {
	const form = document.createElement('form');

	const emailLabel = document.createElement('label');
	emailLabel.setAttribute('for', 'email');
	// emailLabel.innerText = 'Email';

	const emailInput = document.createElement('input');
	emailInput.setAttribute('name', 'email');
	emailInput.setAttribute('id', 'email');
	emailInput.setAttribute('type', 'email');
	emailInput.setAttribute('placeholder', 'Email');
	emailInput.setAttribute('required', true);

	form.append(emailLabel);
	form.append(emailInput);

	const passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	// passwordLabel.innerText = 'Password';

	const passwordInput = document.createElement('input');
	passwordInput.setAttribute('name', 'password');
	passwordInput.setAttribute('id', 'password');
	passwordInput.setAttribute('type', 'password');
	passwordInput.setAttribute('placeholder', 'Password');
	passwordInput.setAttribute('required', true);

	form.append(passwordLabel);
	form.append(passwordInput);

	const loginButton = document.createElement('input');
	loginButton.setAttribute('type', 'submit');
	loginButton.setAttribute('value', 'Login');

	form.append(loginButton);

	const hasNoAccount = document.createElement('p');
	hasNoAccount.innerText = "Don't have an account?";
	form.append(hasNoAccount);

	return form;
}

function createRegistrationForm() {
	const form = document.createElement('form');

	const nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'name');
	// nameLabel.innerText = 'Name';

	const nameInput = document.createElement('input');
	nameInput.setAttribute('name', 'name');
	nameInput.setAttribute('id', 'name');
	nameInput.setAttribute('type', 'text');
	nameInput.setAttribute('placeholder', 'Name');
	nameInput.setAttribute('required', true);

	form.append(nameLabel);
	form.append(nameInput);

	const emailLabel = document.createElement('label');
	emailLabel.setAttribute('for', 'email');
	// emailLabel.innerText = 'Email';

	const emailInput = document.createElement('input');
	emailInput.setAttribute('name', 'email');
	emailInput.setAttribute('id', 'email');
	emailInput.setAttribute('type', 'email');
	emailInput.setAttribute('placeholder', 'Email');
	emailInput.setAttribute('required', true);

	form.append(emailLabel);
	form.append(emailInput);

	const passwordLabel = document.createElement('label');
	passwordLabel.setAttribute('for', 'password');
	// passwordLabel.innerText = 'Password';

	const passwordInput = document.createElement('input');
	passwordInput.setAttribute('name', 'password');
	passwordInput.setAttribute('id', 'password');
	passwordInput.setAttribute('type', 'password');
	passwordInput.setAttribute('placeholder', 'Password');
	passwordInput.setAttribute('required', true);

	form.append(passwordLabel);
	form.append(passwordInput);

	const registerButton = document.createElement('input');
	registerButton.setAttribute('type', 'submit');
	registerButton.setAttribute('value', 'Register');

	form.append(registerButton);

	const hasAccount = document.createElement('p');
	hasAccount.innerText = 'Already have an account?';
	form.append(hasAccount);

	return form;
}

function createHabit(data) {
	const div = document.createElement('div');
	div.setAttribute('class', 'habit-card');

	const habitTitle = document.createElement('h2');
	habitTitle.textContent = data.habitName;

	const viewButton = document.createElement('button');
	viewButton.textContent = 'View';
	viewButton.setAttribute('id', data.id);
	viewButton.setAttribute('class', 'view-button');

	div.append(habitTitle);
	div.append(viewButton);

	return div;
}

function createViewHabit(data) {
	const section = document.createElement('div');
	section.setAttribute('class', 'habit-view-container');

	const goHomeButton = document.createElement('button');
	goHomeButton.setAttribute('class', 'return');
	goHomeButton.textContent = '⇚';
	// can change this to be more elegant
	goHomeButton.addEventListener('click', () => {
		const main = document.querySelector('main');
		const viewContainer = document.getElementById('habit-view');
		const habitsModal = document.querySelector('.habit-modal');

		//hide the current page content, other than nav
		main.removeAttribute('style');
		habitsModal.removeAttribute('style');
		viewContainer.textContent = '';
	});

	const markAsComplete = document.createElement('button');
	markAsComplete.textContent = 'Mark as complete';
	markAsComplete.addEventListener('click', async () => {
		const response = await postCompletion(data.id);
	});

	const removeCompletion = document.createElement('button');
	removeCompletion.textContent = 'Remove completion';
	removeCompletion.addEventListener('click', async () => {
		const response = await deleteCompletion(data.id, 1);
	});

	const habitTitle = document.createElement('h1');
	habitTitle.textContent = data.habitName;

	const description = document.createElement('p');
	description.textContent = data.description;

	const editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	editButton.addEventListener('click', () => console.log('edit functionality'));
	// editButton.addEventListener('click', () => bringUpEditModal(data));

	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'Delete';
	deleteButton.addEventListener('click', async () => {
		const response = await deleteHabit(data.id);
		const responseJson = await response.json();
	});

	const chartContainer1 = document.createElement('div');
	chartContainer1.setAttribute('id', 'chart1');

	const chartContainer2 = document.createElement('div');
	chartContainer2.setAttribute('id', 'chart2');

	//add in chart generation and streaks

	section.append(goHomeButton);
	section.append(habitTitle);
	section.append(description);
	section.append(markAsComplete);
	section.append(removeCompletion);
	section.append(chartContainer1);
	section.append(chartContainer2);
	section.append(editButton);
	section.append(deleteButton);

	return section;
}

module.exports = { createLoginForm, createRegistrationForm, createHabit, createViewHabit };
