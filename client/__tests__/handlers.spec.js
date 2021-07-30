const fs = require('fs');
const path = require('path');
const htmlDashboard = fs.readFileSync(path.resolve(__dirname, '../dashboard.html'), 'utf8');
const htmlIndex = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const htmlProfile = fs.readFileSync(path.resolve(__dirname, '../profile.html'), 'utf8');
let myFuns;
global.fetch = require('jest-fetch-mock');

describe('index handlers', () => {
	beforeAll(() => {
		document.documentElement.innerHTML = htmlIndex.toString();
		myFuns = require('../assets/js/lib/handlers');
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	test('bindIndexListeners', () => {
		myFuns.bindIndexListeners();
		const loginButton = document.querySelector('.login');
		expect(loginButton).toBeTruthy();
	});

	test('bindNavListeners', () => {
		myFuns.bindNavListeners();
		const loginButton = document.querySelector('.login');
		expect(loginButton).toBeTruthy();
	});

	test('bindNavListeners', () => {
		myFuns.renderHabits();
		myFuns.openHabitModalFromProfile();
		myFuns.initPageBindings();
		const loginButton = document.querySelector('.login');
		expect(loginButton).toBeTruthy();
	});
});

describe('dashboard handlers', () => {
	beforeAll(() => {
		document.documentElement.innerHTML = htmlDashboard.toString();
		myFuns = require('../assets/js/lib/handlers');
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	test('bindDashboardListeners', () => {
		const addHabitButtons = document.querySelector('.add-habit');
		myFuns.bindDashboardListeners();
		expect(addHabitButtons).toBeTruthy();
	});
});

describe('profile handlers', () => {
	beforeAll(() => {
		document.documentElement.innerHTML = htmlProfile.toString();
		myFuns = require('../assets/js/lib/handlers');
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	test('bindProfileListeners', () => {
		const changeUserInfoSubmitButton = document.getElementById('user-info-form');
		myFuns.bindProfileListeners();
		expect(changeUserInfoSubmitButton).toBeTruthy();
	});
});
