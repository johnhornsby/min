import DOMPurify from 'isomorphic-dompurify';
// import min from 'min';
// import jsdom from 'jsdom';

it("renders correctly", () => {
  // const t = min({ childParam: 'hello' });
  // console.log(t)
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});
