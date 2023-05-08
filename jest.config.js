module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[j]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  // transformIgnorePatterns: ['/node_modules/(?!(min|jsdom)/)'],
};
