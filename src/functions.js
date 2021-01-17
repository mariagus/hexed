export default function decToHex(num) {
  // if arg isn't a number, return with "Please enter a valid decimal number"
  num = Number(num);
  let result = num;
  const answer = [];
  const convert = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };

  while (result > 0) {
    let remainder = result % 16;
    if (remainder > 9) {
      remainder = convert[remainder];
    }
    answer.unshift(remainder);
    result = Math.floor(result / 16);
  }

  return answer.join("");
}

console.log(decToHex("34221"));
