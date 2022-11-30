module.exports = {
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testEnvironment: 'node',
    preset: '@shelf/jest-mongodb',
    transform: {
      '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
      '@/tests/(.*)': '<rootDir>/tests/$1',
      '@/(.*)': '<rootDir>/src/$1'
    }
}
  