
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[tj]sx?$': './jest.transform.js',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};
