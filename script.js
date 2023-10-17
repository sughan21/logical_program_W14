//1.Write a JavaScript function isPrime(n) that takes an integer n as input and returns true if n is a prime number, and false if it is not.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(15));
console.log(isPrime(23));
console.log(isPrime(1));

//2.Write a JavaScript function reverseString(str) that takes a string str as input and returns the reverse of the string.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));
console.log(reverseString(""));

//5.Write a JavaScript function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string str.

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("The quick brown fox"));
console.log(countVowels("Rhythm"));

//6.Write a JavaScript function findMax(arr) that finds and returns the maximum number in an array

function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([9, 23, 5, 17, 11]));
console.log(findMax([-1, -5, -2, -8, -3]));

//7.Write a JavaScript function reverseWords(str) that reverses the order of words in a given string str.

function reverseWords(str) {
  const words = str.split(" ");

  const reversedWords = words.reverse();

  const reversedString = reversedWords.join(" ");

  return reversedString;
}

console.log(reverseWords("A B C D E"));
console.log(reverseWords("SingleWord"));

//8.Write a JavaScript function isLeapYear(year) that determines whether a given year year is a leap year. A leap year is divisible by 4, but not divisible by 100 unless it is also divisible by 400.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2100));
console.log(isLeapYear(2000));
console.log(isLeapYear(2022));
