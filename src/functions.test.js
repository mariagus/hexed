import { decToHex, hexToDec } from "./functions";

test("convert decimal to hexadcimal", () => {
  expect(decToHex("10")).toBe("A");
  expect(decToHex("358")).toBe("166");
  expect(decToHex("4555")).toBe("11CB");

  expect(decToHex("")).toBe("Enter a valid number");
});

test("convert hexadecimal to decimal", () => {
  expect(hexToDec("11CB")).toBe("4555");
  expect(hexToDec("44FA234")).toBe("72327732");
  expect(hexToDec("81432A")).toBe("8471338");

  expect(hexToDec("")).toBe("Enter a valid number");
});
