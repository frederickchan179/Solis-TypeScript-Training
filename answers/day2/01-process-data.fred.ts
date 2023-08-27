// Day 2 - 01/Process Data

// ============= Your Code Here =============
/**
 * This function should process the raw data into the processed data.
 * The processed data should be an array of trimmed strings.
 *
 * @param data A object containing the type of data and the raw data to be processed
 * @param data.type The type of data to be processed. Only can be 'string' or 'number'
 * @param data.data The raw data to be processed
 * @param delimiter A string that is used to separate the raw data, Only can be ' ' or ','. Default to ' '
 * @returns An array of processed data
 * - If the type of data is not 'string' or 'number', return an empty array
 * - If the type of data is 'number', return an array of numbers
 * - If the type of data is 'string', return an array of trimmed strings
 */
function processData(data: { type: string, data: string }, delimiter: ' ' | ',' = ' ') {
  if (data.type === 'string') {
    return data.data.split(delimiter).map((item) => item.trim())
  } else if (data.type === 'number') {
    return data.data.split(delimiter).map((item) => Number(item))
  } else {
    return []
  }
}

// ============== Don't Touch ==============
const tokenData = {
  type: 'string',
  data: '6K8Zg n3MzX 4qOJ7 1hGt9 Y6sDp uJ4Zn 7Oc3R xT9vB Q6mZ4 5jHt1'
}

const customerNameData = {
  type: 'string',
  data: 'John Doe, Peter Parker, Mary Jane, Clark Kent, Bruce Wayne'
}

const numbersData = {
  type: 'number',
  data: '1,2,3,4,5,6,7,8,9,10'
}

const otherData = {
  type: 'other',
  data: 'a.b.c.d.e.f.g.h.i.j'
}

const tokens = processData(tokenData)
const customerNames = processData(customerNameData, ',')
const numbers = processData(numbersData, ',')

// @ts-expect-error: Argument of type '"."' is not assignable
const others = processData(otherData, '.')

console.log(tokens) // Must be ['6K8Zg', 'n3MzX', '4qOJ7', '1hGt9', 'Y6sDp', 'uJ4Zn', '7Oc3R', 'xT9vB', 'Q6mZ4', '5jHt1']
console.log(customerNames) // Must be ['John Doe', 'Peter Parker', 'Mary Jane', 'Clark Kent', 'Bruce Wayne']
console.log(numbers) // Must be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(others) // Must be []

export {}
