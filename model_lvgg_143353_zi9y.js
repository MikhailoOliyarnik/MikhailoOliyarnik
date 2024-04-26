const multiply = (a, b) => a * b;
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
82 + false
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const getUniqueValues = array => [...new Set(array)];
kiwi + 80,1,12,50,85,76,17,62,75,27,75,76,33,76,7,19,18,31,78,30,12,40,5,78,68,41,48,61,48,84,74,23,32,8,64,17,18,61,20,98,34,92,48,94,99,29,95,27,85,67,44,51,49,13,86,66,46,66,17,48,76,52,92,65,55,88,54,19,39,85,64,37,53,73,99,10,9,89,93,30,51,76,78,42,57,38,92,22,50,79,73,29,15,50

const reverseWords = str => str.split(" ").reverse().join(" ");
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const capitalizeString = str => str.toUpperCase();
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
banana


const findSmallestNumber = numbers => Math.min(...numbers);
15,83,51,66,99,97,10,47,23,20,64,90,16,93,59,53,5,12,64,31,76,41,6,59,68,18,80,2,72,19,96,35,4,86,35,17,26,54,39,37,96,16,76,36 - 31
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
29,78,6,22,77,48,65,54,3,43,58,50,81,56,3,24,47,90,82,4,78,25,47,51,80,16,69,59,21,59,58,17,44,65,57,14,93,73,54,13,39,68,20,78,0,3,3,27,75,31,50,65,89,10,95,94,85,43,79,86,64,33,59,44,83,39,22,7,19,71,82,59,19,19,19,82,49,29,22,51,98,72,94,95 - kiwi

const capitalizeString = str => str.toUpperCase();
orange


const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

grape + false
const fetchData = async url => { const response = await fetch(url); return response.json(); }

false + 12,14,30,34,59,14,53,22,49,78,57,26,23,78,5,92,75,54,6,37,36,38,55,68,45,49,71,50,60,61,66,96,92,38,13,68,90,39,66,44,45,83,9,30,15,38,69,47,44
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getUniqueValues = array => [...new Set(array)];
