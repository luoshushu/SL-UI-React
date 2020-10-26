const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  reporters: ["jest-junit"],
  collectCoverage: true, //是否收集测试覆盖率
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"], //测试lib下的所有ts tsx文件（不包含__test__），不测试node_modules
  coverageDirectory: 'coverage', //生成的报告放在coverage里面
  coverageReporters: ['text', 'lcov'],
})

