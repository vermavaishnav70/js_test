const solution = require("./index");

// Test utilities
let passedTests = 0;
let totalTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`✓ PASS: ${testName}`);
  } else {
    console.log(`✗ FAIL: ${testName}`);
  }
}

function assertDeepEqual(actual, expected, testName) {
  totalTests++;
  const isEqual = JSON.stringify(actual) === JSON.stringify(expected);
  if (isEqual) {
    passedTests++;
    console.log(`✓ PASS: ${testName}`);
  } else {
    console.log(`✗ FAIL: ${testName}`);
    console.log("  Expected:", expected);
    console.log("  Actual:  ", actual);
  }
}

// Test Case 1: Basic example with all days present
console.log("TEST 1: Basic Example - All Days Present");
const D1 = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2,
};
const expected1 = { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 };
assertDeepEqual(solution(D1), expected1, "Basic aggregation");
console.log();

// Test Case 2: Missing consecutive days
console.log("TEST 2: Missing Consecutive Days (Thu & Fri)");
const D2 = {
  "2020-01-01": 6,
  "2020-01-04": 12,
  "2020-01-05": 14,
  "2020-01-06": 2,
  "2020-01-07": 4,
};
const expected2 = { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 };
assertDeepEqual(solution(D2), expected2, "Linear interpolation");
console.log();

// Test Case 3: Multiple occurrences of same day
console.log("TEST 3: Multiple Occurrences");
const D3 = {
  "2020-01-06": 10,
  "2020-01-13": 20,
  "2020-01-20": 30,
  "2020-01-07": 5,
};
const result3 = solution(D3);
assert(result3.Mon === 60, "Monday sum (10+20+30=60)");
assert(result3.Tue === 5, "Tuesday value (5)");
console.log();

// Summary
console.log("=".repeat(70));
console.log(`SUMMARY: ${passedTests}/${totalTests} tests passed`);
console.log("=".repeat(70));

process.exit(passedTests === totalTests ? 0 : 1);
