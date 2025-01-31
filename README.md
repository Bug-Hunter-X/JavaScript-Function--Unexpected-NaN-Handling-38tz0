# JavaScript Function: Unexpected NaN Handling

This repository demonstrates a common JavaScript error involving unexpected behavior with NaN (Not a Number) values in a division operation.  The original code lacks a robust check for NaN, leading to potential inaccuracies or unexpected results.

## Bug Description
The function `foo` aims to perform division. However, it does not correctly handle cases where one of the arguments is NaN. The strict equality check (`===`) with 0 will fail, leading to the function executing the division with NaN, resulting in NaN as a return value.  This may not be the intended behavior.

## Solution
The solution explicitly checks for NaN before proceeding with the division, ensuring the function behaves correctly in all cases, including when either argument is NaN.