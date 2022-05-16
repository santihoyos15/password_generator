function renderPasswords (passwordElements, passwordLength) {
    const randomPasswords = generateRandomPasswords({
        passwordLength, 
        passwordAmount: 4
    })
    
    passwordElements.forEach((el, index) => {
        el.value = randomPasswords[index]
    })  
}

function checkLengthNotExceeded (evt) {
    const el = evt.target || evt

    if(el.type == "number" && el.max && el.min){
        let value = parseInt(el.value)
        el.value = value // for 000 like input cleanup to 0
        let max = parseInt(el.max)
        let min = parseInt(el.min)
        if ( value > max ) el.value = el.max
        if ( value < min ) el.value = el.min
    }
}

/* --- EVENT LISTENERS --- */
const passwordElements = document.querySelectorAll(".password")
const generatePasswordsBtn = document.querySelector(".generate-passwords")
const lengthInput = document.querySelector(".length-input")

function assignCopyOnClick (inputElements) {
    passwordElements.forEach(input => input.addEventListener("click", () => {
        if (input.value){
            input.select()
            document.execCommand('copy')
            
        }
    }))
}

generatePasswordsBtn.addEventListener("click", () => {
    renderPasswords(passwordElements, lengthInput.value)
})

assignCopyOnClick(passwordElements)

lengthInput.addEventListener('input', checkLengthNotExceeded);