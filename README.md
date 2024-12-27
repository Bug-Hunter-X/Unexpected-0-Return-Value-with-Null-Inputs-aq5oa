# Unexpected 0 Return Value with Null Inputs

This repository demonstrates a common JavaScript error related to null value handling in functions.  The `foo` function is designed to add two numbers, but it incorrectly returns 0 when either input is null. This behavior might be unexpected and lead to incorrect results in applications relying on this function.

The `bug.js` file contains the faulty function, and `bugSolution.js` provides a corrected version that handles null values more robustly.

## Bug Description
The primary issue lies within the conditional statement's `return 0;` statement.  While seemingly intended to handle null values, it doesn't distinguish between null and other potential invalid input types.  A more robust approach would either throw an error or provide a default value based on application needs.

## Solution
The solution provided in `bugSolution.js` uses a conditional check to ensure both input values are numbers. If they are not, an error message is thrown, improving error handling and clarity.