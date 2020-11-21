const characterCountRange = document.getElementById("characterCountRange");
const characterCountNumber = document.getElementById("characterCountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeLowercaseElement = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSpecialCharacters = document.getElementById("specialCharacters");
const form = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("passwordDisplay");
// Set up event listener to sync number selected in box with number selected on slider.
characterCountNumber.addEventListener("input", syncCharacterCount);
characterCountRange.addEventListener("input", syncCharacterCount);

// Prevent form from performing the default behavior of submitting and refreshing page when form is clicked.
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const characterCount = characterCountNumber.value;
	// Set up event listener for checkboxes.
	const includeUppercase = includeUppercaseElement.checked;
	const includeLowercase = includeLowercaseElement.checked;
	const includeNumbers = includeNumbersElement.checked;
	const includeSpecialCharacters = includeSpecialCharacters.checked;
	// Set up password variables.
	const password = generatePassword(
		characterCount,
		includeUppercase,
		includeLowercase,
		includeNumbers,
		includeSpecialCharacters
	);
	passwordDisplay.innerText = password;
});

// Add ASCII character codes for constants.
const UPPERCASE_CHAR_CODES = ascendingArray(65, 90);
const LOWERCASE_CHAR_CODES = ascendingArray(97, 122);
const NUMBER_CHAR_CODES = ascendingArray(48, 57);
const SPECIAL_CHAR_CODES = ascendingArray(33, 47);

// Call function using ASCII character codes.
function generatePassword(
	characterCount,
	includeUppercase,
	includeLowercase,
	includeNumbers,
	includeSpecialCharacters
) {
	let charCodes = LOWERCASE_CHAR_CODES;
	if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
	if (includeSpecialCharacters)
		charCodes = charCodes.concat(SPECIAL_CHARACTER_CHAR_CODES);
	if (includesNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);

	const passwordCharacters = [];
	for (let i = 0; i < characterCount; i++) {
		const characterCode =
			charCodes[Math.floor(Math.random() * charCodes.length)];
		passwordCharacters.push(String.fromCharCode(characterCode));
	}
	return passwordCharacters.join("");
}
// Set up for loop to generate number arrays automatically.
function ascendingArray(low, high) {
	const array = [];
	for (let i = low; i <= high; i++) array.push(i);
}

function syncCharacterCount(event) {
	const value = event.target.value;
	characterCountNumber.value = value;
	characterCountRange.value = value;
}
