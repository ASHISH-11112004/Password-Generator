const passwordbox = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
const Allchars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += Allchars[Math.floor(Math.random() * Allchars.length)];
    
    while (length > password.length) {
        password += Allchars[Math.floor(Math.random() * Allchars.length)];   
    }
    passwordbox.value = password;
}
function copyToClipboard() {
  passwordbox.select();
  document.execCommand("copy");
  alert("Password copied to clipboard: " + passwordbox.value);
}