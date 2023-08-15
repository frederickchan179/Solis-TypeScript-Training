// Day 1 - Warm Up

// ============= Test Cases =============
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
  Expect<Equal<HelloWorld, typeof str>>,
  Expect<Equal<typeof constStr, typeof str>>
]

// ============= Your Code Here =============
type HelloWorld = string
const constStr: string = 'Hi world'

// eslint-disable-next-line prefer-const
let str = 'Hello World'
