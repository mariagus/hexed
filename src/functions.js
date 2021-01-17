function decToHex(num) {
  if (num.match(/\D/g) || !num) {
    return "Enter a valid number";
  }
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

function hexToDec(num) {
  if (num.match(/[^a-f|\d]/gi) || !num) {
    return "Enter a valid number";
  }
  const convert = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
  let result = num.split("").reverse();
  result = result.map((el, i) => {
    if (el.match(/[A-F]/gi)) {
      el = el.toUpperCase();
      el = convert[el];
    }
    return (el = el * Math.pow(16, i));
  });
  return result.reduce((a, b) => a + b);
}

export { decToHex, hexToDec };
