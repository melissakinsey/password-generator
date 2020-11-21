const characterCountRange = document.getElementById("characterCountRange")
const characterCountNumber = document.getElementById("characterCountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSpecialElement = document.getElementById("includeSpecial")
const form = document.getElementById("passwordGeneratorForm")
const passwordDisplayElement = document.getElementById("passwordDisplay")

// Add ASCII character codes for constants.
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIAL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
    ).concat(
        arrayFromLowToHigh(91, 96)
        ).concat(
            arrayFromLowToHigh(123, 126)
            )
            
            // Set up event listener to sync number selected in box with number selected on slider.
            characterCountNumber.addEventListener("input", syncCharacterCount)
            characterCountRange.addEventListener("input", syncCharacterCount)
            
            // Prevent form from performing the default behavior of submitting and refreshing page when form is clicked.
            form.addEventListener("submit", e => {
                e.preventDefault()
                console.log("Is this working?")
                const characterCount = characterCountNumber.value
                // Set up event listener for checkboxes.
                const includeUppercase = includeUppercaseElement.checked
                const includeNumbers = includeNumbersElement.checked
                const includeSpecial = includeSpecialElement.checked
                // Set up password variables.
                
                const password = generatePassword(characterCount, includeUppercase, includeNumbers, includeSpecial)
                const passwordDisplay = password
                passwordDisplayElement.innerText = passwordDisplay})
            
            function generatePassword(characterCount, includeUppercase, includeNumbers, includeSpecial) {
                let charCodes = LOWERCASE_CHAR_CODES
                if (includeUppercase) charCodes = charCodes.concat (UPPERCASE_CHAR_CODES)
                if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
                if (includeSpecial) charCodes.concat(SPECIAL_CHAR_CODES)
                
                
                const passwordCharacters = []
                for (let i = 0; i < characterCount; i++) {
                    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
                    passwordCharacters.push(String.fromCharCode(characterCode))
                }

                return passwordCharacters.join("")
            }
            
            function arrayFromLowToHigh(low, high) {
                const array = []
                for (let i = low; i <= high; i++) {
                    array.push(i)
                }
                return array
            }
            
            function syncCharacterCount(e) {
                const value = e.target.value
                characterCountNumber.value = value
                characterCountRange.value = value
            }
            
        
            
            
            
            
            // Call function using ASCII character codes.
            
            
            
            
            // Set up for loop to generate number arrays automatically.
            