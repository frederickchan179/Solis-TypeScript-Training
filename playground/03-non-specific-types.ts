/* eslint-disable prefer-const, no-constant-condition, @typescript-eslint/no-unused-vars */

// ============= any =============
let anyValue: any = 'Hello World'
// ^ type: any ==> explicitly set it to be "any" type

anyValue = false
anyValue = 18
anyValue = [1, 2, 3]
anyValue = { a: 1, b: 2, c: 3 }
anyValue = null
// ^ anything can be assigned to "any"

let anyValueLen = anyValue.length
// ^ no TypeScript error, no type safety ==> but this will throw a runtime error
// ================================

// ============= unknown =============
let unknownValue: unknown = 'Hello World'
// ^ type: unknown ==> explicitly set it to be any type

unknownValue = false
unknownValue = 18
unknownValue = [1, 2, 3]
unknownValue = { p1: 1, p2: 2, p3: 3 }
unknownValue = null
// ^ anything can be assigned to "unknown" same as "any

let unknownValueLen = unknownValue.length
// ^ here will throw a TypeScript error, better type safety than "any"

if (typeof unknownValue === 'string') {
  unknownValueLen = unknownValue.length
  // ^ no TypeScript error with type guard because we know what we do.
}

if (typeof unknownValue === 'object') {
  unknownValueLen = unknownValue.p1
  // ^ "null" is also an object, so this will throw a TypeScript error
}

if (typeof unknownValue === 'object' && unknownValue !== null && 'p1' in unknownValue) {
  unknownValueLen = unknownValue.p1
  // ^ no TypeScript error with type guard because we know what we do.
}

function wrongAdd(num1: unknown, num2: unknown) {
  return parseInt(num1 + num2)
  // ^ both "num1" and "num2" are "unknown", so this will throw a TypeScript error
}
const wrongAddResult = wrongAdd(new Date(), 1)
// ^ type: any ==> will be NaN on runtime

function correctAdd(num1: unknown, num2: unknown) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
    // ^ no TypeScript error with type guard because we know what we do.
  }

  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return parseInt(num1) + parseInt(num2)
    // ^ no TypeScript error with type guard because we know what we do.
  }

  if (num1 instanceof Date && typeof num2 === 'number') {
    return new Date(num1.getFullYear(), num1.getMonth(), num1.getDate() + num2)
    // ^ no TypeScript error with type guard because we know what we do.
  }

  return 0
}
const correctAddResult = correctAdd(new Date(), 1)
// ^ type: number | Date ==> inferred type
// ================================

// ============= void =============
function aFunctionReturnsNothing() {
  console.log('I do nothing')
}
// ^ type: () => void ==> inferred type

let voidValue = aFunctionReturnsNothing()
// ^ type: void ==> explicitly set it to be void type

voidValue = undefined
// ^ Only "undefined" can be assigned to "void"

voidValue = null
voidValue = 18
voidValue = false
// ^ will throw a TypeScript error
// ================================

// ============= never =============
let neverValue: never = 0
neverValue = null
neverValue = undefined
neverValue = false
neverValue = 'Hello World'
// ^ nothing can be assigned to "never"

const aFunctionNeverReturns = (message: string) => {
  while (true) {
    console.log(message)
  }
}
// ^ type: (message: string) => never ==> this function will never return

let neverReturnedValue = aFunctionNeverReturns('Hello World')
// ^ type: never ==> inferred type

function doSomeAction(status: 'Pending' | 'Working' | 'Complete') {
  switch (status) {
    case 'Pending':
      console.log('Pending')
      break
    case 'Working':
      console.log('Working')
      break
    case 'Complete':
      console.log('Complete')
      break
    default:
      const exhaustiveCheck = status
      // ^ type: never, code will never reach here, this will throw a TypeScript error

      break
  }
}
// ================================