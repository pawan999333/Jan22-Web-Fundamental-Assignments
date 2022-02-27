//Q.Write a function which takes an input and returns true / false whether it is palindrome or not.


function Palindrome(str) {
    
    let len = string.length;
    
    for (let i = 0; i < len / 2; i++) {
        if (string[i] == string[len - 1 - i]) {
            return true;
        }
        return false;
    }
}
let string = prompt('Enter a string: ');
let value = Palindrome(string);
document.write(value);