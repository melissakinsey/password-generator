const characterCountRange = document.getElementById("characterCountRange")
const characterCountNumber = document.getElementById("characterCountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeLowercaseElement = document.getElementById("includeLowercase")
const includeNumbers = document.getElementById("includeNumbers")
const includeSpecialCharacters = document.getElementById("specialCharacters")
const form = document.getElementById("passwordGeneratorForm")

// Set up event listener to sync number selected in box with number selected on slider.
characterCountNumber.addEventListener("input", syncCharacterCount)
characterCountRange.addEventListener("input", syncCharacterCount)

// Prevent form from performing the default behavior of submitting and refreshing page when form is clicked.
form.addEventListener("submit", event => {
    event.preventDefault()
    const characterCount = characterCountNumber.value
    // Set up event listener for checkboxes.
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSpecialCharacters = includeSpecialCharacters.checked
    // Set up password variables.
    const password = generatePassword(characterCount, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters)
})

// Call function using ASCII character codes.
function generatePassword(characterCount, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {String.fromCharCode(65)

}

// Set up for loop to generate number arrays automatically.
function ascendingArray(low, high) {
    const array = []
    for (let i = low; i <= high; i++)
        array.push(i)
}
return array

function syncCharacterCount(event) {
    const value = event.target.value
    characterCountNumber.value = value
    characterCountRange.value = value
}

