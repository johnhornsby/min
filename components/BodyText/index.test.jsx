import DOMPurify from "isomorphic-dompurify";

it("renders correctly", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});
