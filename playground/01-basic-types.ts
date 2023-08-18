/* eslint-disable prefer-const, no-constant-condition, @typescript-eslint/no-unused-vars */

// ============= string =============
const constStr = 'Hello World'
// ^ type: "Hello World" ==> literal type, a constant with known initial value

let explicitStr: string = 'Hello World'
// ^ type: string ==> explicitly set it to be a "string"


let inferredStr = 'Hello World'
// ^ type: string ==> inferred type, and using let instead of const
// ==================================

// ============= number =============
const inferredStrLen = inferredStr.length
// ^ number ==> inferred type

const constNum = 18
// ^ type: 18 ==> literal type, a constant with known initial value

let explicitNum: number = 18
// ^ type: number ==> explicitly set it to be a "number"

let inferredNum = 18
// ^ type: number ==> inferred type, and using let instead of const
// ==================================

// ============= boolean =============
const inferredCheckStrLen = inferredStrLen === 11
// boolean ==> inferred type

const constBool = false
// type: false ==> literal type, a constant with known initial value

let explicitBool: boolean = false
// ^ type: boolean ==> explicitly set it to be a "boolean"

let inferredBool = true
// ^ type: boolean ==> inferred type, and using let instead of const
// ===================================

// ============= bigint =============
const constBigInt = 123123123123123123n
// ^ type: 123123123123123123n ==> literal type, a constant with known initial value

const constBigInt2 = BigInt(123123123123123123n)
// ^ type: bigint ==> receive type from BigInt() return type

let explicitBigInt: bigint = 123123123123123123n
// ^ type: bigint ==> explicitly set it to be a "bigint"

let inferredBigInt = 123123123123123123n
// ^ type: bigint ==> inferred type, and using let instead of const
// ==================================

// ============= symbol =============
const constSymbol = Symbol('Hello World')
// ^ type: typeof constSymbol ==> literal type, a constant with known initial value

let explicitSymbol: symbol = Symbol('Hello World')
// ^ type: symbol ==> explicitly set it to be a "symbol"

let inferredSymbol = Symbol('Hello World')
// ^ type: symbol ==> inferred type, and using let instead of const
// ==================================

// ============= function =============
function sum2Numbers(num1: number, num2: number) {
  return num1 + num2
}
// ^ type: (num1: number, num2: number) => number ==> inferred type

sum2Numbers(1)
// ^ not enough params, will throw a TypeScript error

const lambdaSum2Numbers = (num1: number, num2: number) => num1 + num2
// ^ type: (num1: number, num2: number) => number ==> inferred type

const funcWithDefaultParam = (num1: number, num2: number = 2) => num1 + num2
// ^ type: (num1: number, num2?: number) => number ==> inferred type

funcWithDefaultParam(1)
// ^ num2 is optional, so this is valid TypeScript code

const sum = (...params: number[]) => params.reduce((acc, curr) => acc + curr, 0)
// ^ type: (...params: number[]) => number ==> inferred type

const sumAsParamInOtherFunction = (params: number[], sumFunc: (...params: number[]) => number) => sumFunc(...params)
// ^ type: (callback: (num1: number, num2: number) => number) => number ==> inferred type

const total = sumAsParamInOtherFunction([1, 2, 3], sum)
// ^ type: number ==> inferred type
// ==================================

// ============= array =============
const constArr = [1, 2, 3]
// ^ type: number[] ==> inferred type, the array is constant but its elements are still changeable

constArr.push(4)
// ^ this is valid TypeScript code

const readyOnlyArr = [1, 2, 3] as const
// ^ type: readonly [1, 2, 3] ==> literal type, array elements are readonly (unchangeable)

readyOnlyArr.push(4)
// ^ this is invalid TypeScript code, will throw a TypeScript error

const explicitArr: number[] = [1, 2, 3]
// ^ type: number[] ==> explicitly set it to be a "array" ==> This is the preferred way

const explicitArr2: Array<number> = [1, 2, 3]
// ^ type: Array<number> ==> explicitly set it to be a "array", same as above ==> Not recommende

const objArr = [{ name: 'John Doe', age: 18 }, { name: 'Jane Doe', age: 19 }, { name: 'John Smith', age: 20 }]
// ^ type: { name: string, age: number }[] ==> inferred type, array elements are objects with name and age properties

objArr.push({ name: 'John Smith', age: 20 })
// ^ this is valid TypeScript code

objArr.push({ name: 'John Smith' })
// ^ pushed obj doesn't have all the required properties, will throw a TypeScript error

const optionalObjArr = [{ name: 'John Doe', age: 18 }, { name: 'Jane Doe', age: 19 }, { name: 'John Smith' }]
// ^ type: { name: string, age?: number }[] ==> inferred type, array elements are objects with name and optional age properties

optionalObjArr.push({ name: 'John Smith', age: 20 })
optionalObjArr.push({ name: 'John Smith' })
// ^ both are valid TypeScript code, because age is optional
// ==================================

// ============= object =============
const constObj = { name: 'John Doe', age: 18 }
// ^ type: { name: string, age: number } ==> inferred type, the object is constant but its properties are still changeable

constObj.age = 19
// ^ this is valid TypeScript code

const readyOnlyObj = { name: 'John Doe', age: 18 } as const
// ^ type: { readonly name: "John Doe", readonly age: 18 } ==> literal type, object properties are readonly (unchangeable)

readyOnlyObj.age = 19
// ^ age is readonly, will throw a TypeScript error

let explicitObj: { name: string, age: number } = { name: 'John Doe', age: 18 }
// ^ type: { name: string, age: number } ==> explicitly set it to be a "object"

let errorObj: { name: string, age: number } = { name: 'John Doe' }
// ^ object doesn't have all the required properties, will throw a TypeScript error

errorObj.balance++
// ^ "balance" is not defined in the form of object, will throw a TypeScript error

let optionalObj: { name: string, age?: number, balance?: number } = { name: 'John Doe' }
// ^ type: { name: string, age?: number } ==> no error because of optional properties

optionalObj.age++
// ^ "age" is optional (maybe undefined), will throw a TypeScript error

if (optionalObj.balance) {
  optionalObj.balance++
  // ^ no TypeScript error with type guard because we know what we do.
}
