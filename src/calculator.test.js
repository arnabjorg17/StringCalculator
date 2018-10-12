const add = require("./calculator");

it("should return zero on an empty string", () => 
{
  expect(add("")).toBe(0);
});

it("should return number when there is only one numbe in the string", () =>
{
  expect(add("4")).toBe(4);
});

it("should return sum of two given numbers", () =>
{
  expect(add("1,2")).toBe(3);
});

it("should return sum of unknown number of numbers", () =>
{
  expect(add("1,2,3")).toBe(6);
  expect(add("1,1,1,1")).toBe(4);
});

it("should return sum between numbers that have new lines", () =>
{
  expect(add("1\n2,3")).toBe(6)
});

it("should return sum between numbers that have new lines", () =>
{
  expect(add("1\n2")).toBe(3)
});


it("should return an exception if there is a negative number", () =>
{
  expect(()=> {
    add("-1, 5");
  }).toThrow("Negatives not allowed: -1");
});

it("should return an exception if there is a negative number", () =>
{
  expect(()=> {
    add("-1, -5");
  }).toThrow("Negatives not allowed: -1,-5");
});