import { hello } from "./hello";

test("hello", () => {
  expect(hello()).toEqual("hello world");
});
