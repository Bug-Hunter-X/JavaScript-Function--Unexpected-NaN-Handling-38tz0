function foo(a, b) {
  if (isNaN(a) || isNaN(b) || a === 0 || b === 0) {
    return 0; // Handle NaN and zero cases explicitly
  }
  return a / b; 
}