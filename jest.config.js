module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[j]sx?$": "./jest.transform.js",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
};
