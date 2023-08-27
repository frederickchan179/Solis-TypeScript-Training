// Day 2 - 03/Composable

// ============= Test Cases =============
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment */
// @ts-ignore
type cases = [
  Expect<NotAny<typeof useCounter>>,
  Expect<NotAny<ReturnType<typeof useCounter>>>,
  Expect<Equal<Parameters<typeof useCounter>, [number?]>>,
  Expect<Equal<ReturnType<typeof useCounter>, readonly [() => number, () => number, () => number]>>,
]
/* eslint-enable */

// ============= Your Code Here =============
/**
 * This function is a composable that controls a counter.
 *
 * @param initialCount The initial count of the counter. Default to 0
 * @returns A tuple of:
 * - A function to get the current count
 * - A function to increment the count
 * - A function to decrement the count
 */
function useCounter(initialCount = 0) {
  let count = initialCount

  const getCount = () => count
  const increment = () => ++count
  const decrement = () => --count

  return [getCount, increment, decrement] as const
}

// ============== Don't Touch ==============
const [getCount1, incCount1, decCount1] = useCounter(10)
console.log(getCount1()) // Must be 10
console.log(incCount1()) // Must be 11
console.log(decCount1()) // Must be 10

const [getCount2, incCount2, decCount2] = useCounter(0)
console.log(getCount2()) // Must be 0
console.log(incCount2()) // Must be 1
console.log(decCount2()) // Must be 0

const counter3Composable = useCounter()
// @ts-expect-error: Cannot push to a readonly array
counter3Composable.push(() => 0)

export {}
