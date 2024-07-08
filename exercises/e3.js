// EXERCISE 3
// Make sure to solve two parts beneath

/**
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
	// If the length is 0, then the average is 0
	if (array.length === 0) return 0;

	// Declaring sum variable as 0 to start, will add to it with each array item
	let sum = 0;

	// Loop over every array item
	for (let i = 0; i < array.length; i++) {
		// For item #i, add it to the sum
		sum += array[i];
	}

	// At this point you have added every element of the array
	return sum / array.length;
}

/**
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */

export function getStringSum(str) {
	// Declaring sum variable as 0 to start, will add to it with each array item
	let sum = 0;

	// Loop over all elements of the string
	// GH2U87A -> [G, H, 2, U, 8, 7, A] ->
	// G: 0
	// H: 1
	// 2: 2
	for (let i = 0; i < str.length; i++) {
		// Access the specific character of the string that maps to that index number
		const char = str[i];
		if (char >= "0" && char <= "9") {
			sum += parseInt(char, 10);
		}
	}
	return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
