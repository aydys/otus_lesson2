module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/test-setup.js"]
};
