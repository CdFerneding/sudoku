module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/*.test.ts'],
    setupFiles: ['<rootDir>/testing/Setup.ts']
};
  