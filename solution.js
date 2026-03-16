 // Problem 3: The Functional Sum
function calculateTotal(...numbers) {

    // Check if all arguments are numbers
    numbers.forEach(num => {
        if (typeof num !== "number") {
            throw new TypeError("Invalid input: All arguments must be numbers");
        }
    });

    // Sum using reduce
    return numbers.reduce((total, num) => total + num, 0);
}


