
// 2.1, работа с числами

// Временная сложность: O(sqrt(n)) - сублинейная
function isPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

// Временная сложность: O(n) - линейная
function factorial(n) {
    if (n < 0) return -1;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Временная сложность: O(n) - линейная
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Временная сложность: O(log(min(a, b))) - логарифмическая
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

// 2.2:, работа со строками

// Временная сложность: O(n) - линейная
function isPalindrome(str) {
    // удаление всего кроме букв и цифр, нижний регистр
    let cleanStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    let reversed = '';
    for (let i = cleanStr.length - 1; i >= 0; i--) {
        reversed += cleanStr[i];
    }
    return cleanStr === reversed;
}

// Временная сложность: O(n) - линейная
function countVowels(str) {
    const vowels = 'аеёиоуыэюяaeiou';
    let count = 0;
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}

// Временная сложность: O(n) - линейная
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Временная сложность: O(n) - линейная
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        // Очищаем слово от знаков препинания для точного подсчета
        let cleanWord = words[i].replace(/[^a-zа-яё0-9]/gi, '');
        if (cleanWord.length > longestWord.length) {
            longestWord = cleanWord;
        }
    }
    return longestWord;
}

// 2.3, работа с массивами

// Временная сложность: O(n) - линейная
function findMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Временная сложность: O(n) - линейная (с использованием Set)
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Временная сложность: O(n²) - квадратичная
function bubbleSort(arr) {
    let sortedArr = [...arr];
    let n = sortedArr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break; // если перестановок не было, массив отсортирован
    }
    return sortedArr;
}

// Временная сложность: O(log n) - логарифмическая
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (sortedArr[mid] === target) {
            return mid;
        } else if (sortedArr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// 2.4, утилитарные функции

// Временная сложность: O(n) - линейная (зависит от длины числа)
function formatCurrency(amount, currency = 'P') {
    // форматирование с 2 знаками после запятой и пробелы для тысяч
    let formatted = amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return `${formatted} ${currency}`;
}

// Временная сложность: O(n) - линейная (зависит от длины строки)
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Временная сложность: O(n) - линейная (где n - длина пароля)
function generatePassword(length = 8) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const allChars = uppercase + lowercase + numbers + symbols;
    
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    return password.split('').sort(() => 0.5 - Math.random()).join('');
}