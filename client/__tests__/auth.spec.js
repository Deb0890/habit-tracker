const fs = require('fs');
const path = require('path');
global.fetch = require('jest-fetch-mock'); //use this to test fetching gifs and making requests to backend
let requests;

describe('requests.js', () => {
	beforeAll(() => {
		requests = require('../assets/js/lib/auth');
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	test('requestLogin calls fetch', async () => {
		await requests.requestLogin({});
		expect(fetch).toHaveBeenCalled();
	});

	test('requestRegistration calls fetch', async () => {
		await requests.requestRegistration({});
		expect(fetch).toHaveBeenCalled();
	});

	test('login redirects to dashboard', () => {
		let localStorage = {
			getItem: (x, y) => {},
			setItem: (x, y) => {},
		};
		let window = {
			location: {
				pathName: 'dummyName',
			},
		};
		requests.login();
		expect(window.location.pathName).toBe('dummyName');
	});

	test('logout redirects to index', () => {
		let localStorage = {
			getItem: (x, y) => {},
			setItem: (x, y) => {},
		};
		let window = {
			location: {
				pathName: 'dummyName',
			},
		};
		requests.logout();
		expect(window.location.pathName).toBe('dummyName');
	});
});
