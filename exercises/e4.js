// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
	// Declare the variable for the minimum value
	let minimumValue = array[0];

	// Find minimum value
	for (let i = 1; i < array.length; i++) {
		let currentArrayValue = array[i];

		if (currentArrayValue < minimumValue) {
			minimumValue = currentArrayValue;
		}
	}

	// Returns minimum value
	return minimumValue;
}

export function findMaxValueInArray(array) {
	// Your code goes here...
	let maximumValue = array[0];

	// Find minimum value
	for (let i = 1; i < array.length; i++) {
		let currentArrayValue = array[i];

		if (currentArrayValue > maximumValue) {
			maximumValue = currentArrayValue;
		}
	}
	return maximumValue;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
