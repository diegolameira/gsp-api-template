// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  verbose: true,
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ]
};
