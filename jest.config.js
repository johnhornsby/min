
module.exports = {
  transform: {
    '^.+\\.[j]sx?$': './jest.transform.js',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};
