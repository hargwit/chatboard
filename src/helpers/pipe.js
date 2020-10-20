/**
 *  Pipe is a function that builds a pipeline of functions to apply to a value.
 *
 *  Usage:
 *      const square = n => n * n
 *      const double = n => n * 2
 *
 *      const doubleThenSquare = pipe(double, square)
 *      doubleThenSquare(3) // 36
 *
 * @param  {...Function} fns
 */
export const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x)
