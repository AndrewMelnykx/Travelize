module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  maxWorkers: "50%",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@modals/(.*)$": "<rootDir>/client/src/components/modals/$1",
    "^@custom-ui/(.*)$": "<rootDir>/client/src/components/custom-ui/$1",
    "^@helpers/(.*)$": "<rootDir>/client/src/helpers/$1",
    "^@redux/(.*)$": "<rootDir>/client/src/components/redux/$1",
    "^@header/(.*)$": "<rootDir>/client/src/components/header/$1",
    "^@slices/(.*)$": "<rootDir>/client/src/components/redux/slices/$1",
    "^@data/(.*)$": "<rootDir>/client/src/data/$1",

    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(lodash-es|@babel|@testing-library)/)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  verbose: true,
};
