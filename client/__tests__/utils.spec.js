const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../dashboard.html'), 'utf8');
let myFuns;
global.fetch = require('jest-fetch-mock');

describe('entry.html', () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
		myFuns = require('../assets/js/lib/utils');
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	test('toggleNav', () => {
		const nav = document.querySelector('nav');
		myFuns.toggleNav();
		expect(!nav.classList.contains('hide-nav')).toBeTruthy();
	});

	test('functions run', () => {
		myFuns.addNewHabitToDOM();
		myFuns.addNameToDashboard();
		myFuns.addNameToProfileInput();
		myFuns.validateUser();
		const nav = document.querySelector('nav');
		expect(nav).toBeTruthy();
	});
});
