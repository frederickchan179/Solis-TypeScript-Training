/* eslint-disable prefer-const, no-constant-condition, @typescript-eslint/no-unused-vars */

// ============= Union type variable =============
let unionType: string | number = 'Hello World'
// ^ type: string | number ==> explicitly set it to be a "string" or "number"

if (typeof unionType === 'string') {
  const unionTypeLen = unionType.length
  // ^ no TypeScript error with type guard because we know what we do.
}

unionType = 18
// ^ no TypeScript error, because "unionType" can be a "number"

const unionTypeLen = unionType.length
// ^ will throw a TypeScript error, because "unionType" now is a "number"

if (typeof unionType === 'string') {
  const unionTypeLen = unionType.length
  // ^ type: never, this scope is for string but multipleType is set to 18 (number) above, so this will throw a TypeScript error
}

let moreUnionType: string | number | boolean | undefined | null = 'Hello World'
moreUnionType = 18
moreUnionType = true
moreUnionType = undefined
moreUnionType = null
// ^ no TypeScript error, because "moreUnionType" can be a "string", "number", "boolean", "undefined", or "null"

let canBeAFunc: (() => void) | string | number = 'Hello World'
canBeAFunc = 18
canBeAFunc = () => { console.log('Hello World') }
// ^ no TypeScript error, because "canBeAFunc" can be a "function", "string", or "number"
// ================================

// ============= Union type object property =============
const unionTypeObj: { prop1: string | number, prop2?: string | number } = { prop1: 'Hello World' }
// ^ type: { prop1: string | number, prop2?: string | number } ==> explicitly set it to be an object with "prop1" property that can be a "string" or "number"

unionTypeObj.prop1 = 18
// ^ no TypeScript error, because "unionTypeObj.prop1" can be a "number"

const unionTypeObjLen = unionTypeObj.prop1.length
// ^ will throw a TypeScript error, because "unionTypeObj.prop1" now is a "number"

const { prop1: unionTypeObjProp1, prop2: unionTypeObjProp2 } = unionTypeObj
// ^ type will be inferred as what we defined above
// ================================

// ============= Union type function parameter =============
function unionTypeFunc(unionTypeParam: string | number) {
  if (typeof unionTypeParam === 'string') {
    console.log(unionTypeParam.length)
    // ^ no TypeScript error with type guard because we know what we do.

    return
  }

  if (typeof unionTypeParam === 'number') {
    console.log(unionTypeParam + 18)
    // ^ no TypeScript error with type guard because we know what we do.

    return
  }

  console.log(unionTypeParam)
  // ^ type: never ==> we checked all possible types of "unionTypeParam" above
}

// ============= Tuple type variable =============
let tupleType: [string, number] = ['Hello World', 18]
// ^ type: [string, number] ==> explicitly set it to be a tuple with "string" and "number" types

tupleType = ['Hello World', 18]
// ^ no TypeScript error, because "tupleType" can be a tuple with "string" and "number" types

tupleType = [18, 'Hello World']
// ^ will throw a TypeScript error, not match the defined type order

tupleType = ['Hello World', 18, true]
// ^ will throw a TypeScript error, not match the defined types length

const [tupleTypeStr, tupleTypeNum] = tupleType
// ^ type will be inferred as what we defined above

const [tupleTypeStr2, tupleTypeNum2, tupleTypeBool2] = tupleType
// ^ will throw a TypeScript error, not match the defined types length

function useState(initialValue: unknown): [unknown, (str: unknown) => void] {
  const [value, setValue] = useState(initialValue)
  return [value, setValue]
}
// ^ Mock useState hook in React

const [value, setValue] = useState('Hello World')
// ^ no TypeScript error, because we use the correct types

const [balance, setBalance] = useState(18)
const [isDark, setIsDark] = useState(false)
const [user, setUser] = useState({ name: 'John Doe', age: 18 })
// ^ Tuple is useful for managing small data structure that will be reused in multiple places
