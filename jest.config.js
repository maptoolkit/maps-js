export default {
  // Set up jsdom to simulate a browser-like environment for testing
  testEnvironment: "jsdom",

  // Specify a test environment that supports browser features
  // "jsdom" simulates a browser environment
  testEnvironmentOptions: {
    // jsdom-specific options can be added here if needed, such as the window size
    resources: "usable",
  },

  // Automatically clear mock calls, instances, and results before every test
  clearMocks: true,

  // Test coverage report
  collectCoverage: true,

  // Add transformation if you are using ES Modules (Babel or TypeScript)
  transform: {
    "^.+\\.js$": "babel-jest", // Or another transform if you're using TypeScript or other preprocessing
  },

  // Include specific test file patterns
  testMatch: [
    "**/test/**/*.test.js", // Adjust your test directory and pattern
  ],

  // Enable or disable snapshot testing
  snapshotSerializers: [],

  // If you use third-party libraries in the browser, you might need additional setup
  globalSetup: "./globalSetup.js", // Optional setup file
  globalTeardown: "./globalTeardown.js", // Optional teardown file
};
