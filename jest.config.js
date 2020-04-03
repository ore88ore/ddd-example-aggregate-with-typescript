module.exports = {
    roots: ["<rootDir>/test", "<rootDir>/src"],
    testMatch: ["**/*.test.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
};
