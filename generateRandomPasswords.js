const MIN_ASCII_CHAR_NUM = 32
const MAX_ASCII_CHAR_NUM = 126
    
function generateRandomPasswords ({passwordLength = 8, passwordAmount = 1}) {
    const passwords = []
    for (let i = 0; i < passwordAmount; i++){
        let password = ""
        for (let j = 0; j < passwordLength; j++){
            password += generateRandomASCIIChar()
        }
        passwords.push(password)
    }
    return passwords
}

function generateRandomASCIIChar (){
    const randomCharCode = Math.floor(Math.random() * (MAX_ASCII_CHAR_NUM - MIN_ASCII_CHAR_NUM + 1) + MIN_ASCII_CHAR_NUM)
    return String.fromCharCode(randomCharCode)
}