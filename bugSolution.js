function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers.');
  } else {
    return a + b;
  }
}