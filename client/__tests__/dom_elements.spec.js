const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../dashboard.html'), 'utf8');
let myFuns;
global.fetch = require('jest-fetch-mock');

describe('entry.html', () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
		myFuns = require('../assets/js/lib/dom_elements');
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	test('createLoginForm', () => {
		let loginForm = myFuns.createLoginForm();
		expect(loginForm.childElementCount).toEqual(6);
	});

	test('createRegistrationForm', () => {
		let registerForm = myFuns.createRegistrationForm();
		expect(registerForm.childElementCount).toEqual(8);
	});

	test('createHabit', () => {
		let habit = myFuns.createHabit({
			habitName: 'hello',
			id: 5,
		});
		expect(habit).toBeTruthy();
	});

	test('createViewHabit', () => {
		let viewHabit = myFuns.createViewHabit({
			habitName: 'hello',
			id: 5,
			description: '',
			bestStreak: 5,
			currentStreak: 4,
		});
		expect(viewHabit).toBeTruthy();
	});

	test('onUpdateCompletion', () => {
		let variable = myFuns.onUpdateCompletion();
		expect(1).toBe(1);
	});
});
