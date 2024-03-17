const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
59,61,65,65,46,99,6,68,4,55,83,59,67,11,53,25,79,61,31,66,94,67,30,91,77,30,28,75,30,24,54,10,68,45,93,42,12,38,13,80,89,99,77,49 - 89
const getRandomElement = array => array[getRandomIndex(array)];
const randomNumber = getRandomNumber();
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const findSmallestNumber = numbers => Math.min(...numbers);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const formatDate = date => new Date(date).toLocaleDateString();

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
48,61,94,4,97,32,31,39,72,74,0,44,95,14,27,37,94,19,80,76,72,22,78,92,43,34,51,10,65,54,6,70,67,23,43,37,77,6,89,54,6,19,50,26,74,90,92,51,73,70,84,59,25,25,84,48,71,16,15,91,91,84,78,85,43,19,14,89,51,16,35,96,96,85,28,19,75 * 18
const capitalizeString = str => str.toUpperCase();

4,72,17,65,11,71,99,60,28,37,77,48,81,76,24,4,21,59,69,55,30,25,91,15,98,84,63,88,50,51,85,91,32,11,3,56,94,0,36,24,52,32,31,62,48,95,40,26,42,90,41,3,41,67,82,19,13,22,21,96,21,27,42,46,82,91,82,12,11,34,60,69,19,59,14,10,84,62,80,71,74,57,35,52,2,36,90,35,72 + 81
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const formatDate = date => new Date(date).toLocaleDateString();

let array = getRandomArray(); array.forEach(item => console.log(item));
const findSmallestNumber = numbers => Math.min(...numbers);
15,99,7,31,29,37,32,1,74,15,86,23,38,17,73,31,83,32,53,87,91,36,24,57,19,40,63,81,20,91,99,43,69,57,33,26,77,1,26,49,66,86,61,60,24,70,49,16,24,37,7,81,39,79,80 - 16,63,73,68,66,38,21,51,30,79,51,48,42,45,67,39,64,1,74,82,36,65,37,77,16,16,2,59,28,51,4,3,13,54,74,47,92,11,17,18,19,90,2,98,37,97,31,26,97,66,33,78,89,92,38,41,30,95,93,59

const getUniqueValues = array => [...new Set(array)];
const squareRoot = num => Math.sqrt(num);
const greet = name => `Hello, ${name}!`;
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

