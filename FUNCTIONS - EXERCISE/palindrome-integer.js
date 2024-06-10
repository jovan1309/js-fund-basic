function palindromeInteger(arr) {
    function checkIfPalindrome(num) {
        const numString = num + '';
        let numStringReversed = '';

        for (let i = numString.length - 1; i >= 0; i--) {
            const curChar = numString[i];
            numStringReversed += curChar;
        }

        return numStringReversed === numString;
    }

    for (const num of arr) {
        const isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);
    }
}

palindromeInteger(123, 323, 421, 121);
// palindromeInteger(32, 2, 232, 1010);