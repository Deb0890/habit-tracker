const fs = require('fs');
const path = require('path');
global.fetch = require('jest-fetch-mock'); //use this to test fetching gifs and making requests to backend
let requests;

describe('requests.js', () => {
	beforeAll(() => {
		requests = require('../assets/js/lib/requests');
	});

	beforeEach(() => {
		fetch.resetMocks();
	});

	test('getAllUserHabits calls fetch', async () => {
		await requests.getAllUserHabits('email@email.com');
		expect(fetch).toHaveBeenCalled();
	});

	test('getHabitData calls fetch', async () => {
		await requests.getHabitData('1');
		expect(fetch).toHaveBeenCalled();
	});

	test('postHabit calls fetch', async () => {
		await requests.postHabit({});
		expect(fetch).toHaveBeenCalled();
	});

	test('deleteHabit calls fetch', async () => {
		await requests.deleteHabit('2');
		expect(fetch).toHaveBeenCalled();
	});

	test('putHabit calls fetch', async () => {
		await requests.putHabit({});
		expect(fetch).toHaveBeenCalled();
	});

	test('putUserInfo calls fetch', async () => {
		await requests.putUserInfo({});
		expect(fetch).toHaveBeenCalled();
	});

	test('changePassword calls fetch', async () => {
		await requests.changePassword({});
		expect(fetch).toHaveBeenCalled();
	});

	test('postCompletion calls fetch', async () => {
		await requests.postCompletion({});
		expect(fetch).toHaveBeenCalled();
	});

	test('deleteCompletion calls fetch', async () => {
		await requests.deleteCompletion('1', '1');
		expect(fetch).toHaveBeenCalled();
	});

	test('getLastestCompletionId calls fetch', async () => {
		await requests.getLastestCompletionId('1');
		expect(fetch).toHaveBeenCalled();
	});
});
