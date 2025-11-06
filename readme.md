# 🧩 js_test

## Problem
Transform a **date-based dictionary** into a **day-of-week dictionary** with linear interpolation.

Each input key is a date string (e.g., `"2020-01-01"`) and its value is a number.  
The output maps weekdays (`Mon` → `Sun`) to aggregated and interpolated values.

---
Run the tests with 
```bash
npm test
```
## Example

Input:

```js
{
  "2020-01-01": 4, // Wed
  "2020-01-02": 4, // Thu
  "2020-01-03": 6, // Fri
  "2020-01-04": 8, // Sat
  "2020-01-05": 2, // Sun
  "2020-01-06": -6, // Mon
  "2020-01-07": 2  // Tue
}
```

Output:

```js
{
  Mon: -6,
  Tue: 2,
  Wed: 2,
  Thu: 4,
  Fri: 6,
  Sat: 8,
  Sun: 2
}
```

### Details

- **If a weekday occurs more than once in the input (e.g., multiple Mondays), its values are summed.**
- **If a weekday is missing, interpolate linearly between the nearest known weekdays.**
- **Interpolation is performed with `Math.floor`, i.e., rounded down, between the bracketing days.**
- **If first or last days of the week are missing, interpolate cyclically (wrap around the week).**
- **All output keys are always present: `Mon`, `Tue`, ..., `Sun` (in that order).**

See `test.js` for more test cases.


