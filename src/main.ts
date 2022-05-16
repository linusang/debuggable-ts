import { test, expect } from "vitest";

test("hello world!", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

function add(value1: number, value2: number) {
  return value1 + value2;
}
