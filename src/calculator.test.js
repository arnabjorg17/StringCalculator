const add = require("./calculator");

it("should return zero on an empty string", () => 
{
  expect(add("")).toBe(0);
});

it("should return number when there is only one numbe in the string", () =>
{
  expect(add("4")).toBe(4);
});