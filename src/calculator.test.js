const add = require("./calculator");

it("should return zero on an empty string", () => 
{
  expect(add("")).toBe(0);
});

it("should return number when there is only one numbe in the string", () =>
{
  expect(add("4")).toBe(4);
});

it("should return number when there is only one numbe in the string", () =>
{
  expect(add("7")).toBe(7);
});

it("should return number when there is only one numbe in the string", () =>
{
  expect(add("20")).toBe(20);
});

it("should return sum of two given numbers", () =>
{
  expect(add("1,2")).toBe(3);
});

it("should return sum of two given numbers", () =>
{
  expect(add("5,3")).toBe(8);
});

it("should return sum of two given numbers", () =>
{
  expect(add("6,6")).toBe(12);
});

it("should return sum of unknown number of numbers", () =>
{
  expect(add("1,2,3")).toBe(6);
  
});

it("should return sum of unknown number of numbers", () =>
{
  expect(add("1,1,1,1")).toBe(4);
});

it("should return sum of unknown number of numbers", () =>
{
  expect(add("10,3,1,1")).toBe(15);
});

it("should return sum between numbers that have new lines", () =>
{
  expect(add("1\n2,3")).toBe(6)
});

it("should return sum between numbers that have new lines", () =>
{
  expect(add("1\n2")).toBe(3)
});

it("should return sum between numbers that have new lines", () =>
{
  expect(add("1\n2\n3")).toBe(6)
});

it("should return sum between numbers that have new lines", () =>
{
  expect(add("1,2\n10")).toBe(13)
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

it("should return an exception if there is a negative number", () =>
{
  expect(()=> {
    add("3, -3");
  }).toThrow("Negatives not allowed: -3");
});
it("should return an exception if there is a negative number", () =>
{
  expect(()=> {
    add("-3, -3");
  }).toThrow("Negatives not allowed: -3,-3");
});

it("should ignore numbers that are bigger than 1000", () =>
{
  expect(add("1001,2")).toBe(2)
});

it("should ignore numbers that are bigger than 1000", () =>
{
  expect(add("1000,2")).toBe(1002)
});

it("should ignore numbers that are bigger than 1000", () =>
{
  expect(add("1,5000")).toBe(1)
});


//eru tvær línur?
//er fyrsta línan með "//" inní sér?
//    þá er 3. stafurinn í fyrstu línunni nýja afmörkunin
//
//    1,3 => 4
//    //;\n1;3 => 4

it("should return number", () =>
{
  expect(add("//;\n1;2")).toBe(3)
});

it("should return number", () =>
{
  expect(add("//;\n1;\n2")).toBe(3)
});

it("should return number", () =>
{
  expect(add("//;\n4;\n4")).toBe(8)
});