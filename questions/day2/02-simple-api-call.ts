// Day 2 - 02/Simple API Call

// import fetch from 'node-fetch'

// ============= Test Cases =============
import type { Equal, Expect, NotAny, NotEqual } from '@type-challenges/utils'

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/ban-ts-comment */
// @ts-ignore
type cases = [
  Expect<NotAny<ReturnType<typeof getProducts>>>,
  Expect<NotEqual<ReturnType<typeof getProducts>, Promise<void>>>,
  Expect<NotAny<typeof firstProduct>>,
  Expect<Equal<typeof firstProduct['id'], number>>,
  Expect<Equal<typeof firstProduct['title'], string>>,
  Expect<Equal<typeof firstProduct['description'], string>>,
  Expect<Equal<typeof firstProduct['price'], number>>,
  Expect<Equal<typeof firstProduct['stock'], number>>,
  Expect<Equal<typeof firstProduct['thumbnail'], string>>,
  Expect<Equal<typeof firstProduct['images'], string[]>>,
  Expect<NotAny<typeof firstProductWithError>>,
]
/* eslint-enable */

const API_ENDPOINT = 'https://dummyjson.com/products'
let fakeThrowError = false

// ============= Your Code Here =============
/**
 * This function should get the products from the API endpoint above
 * and return an array of products.
 *
 * A product will have the following properties:
 * - id
 * - title
 * - description
 * - price
 * - stock
 * - thumbnail
 * - images
 *
 * @returns An array of products or an empty array
 * - If the API call is successful, return an array of products
 * - If the API call is unsuccessful, return an empty array
 */
async function getProducts() {
  try {
    if (fakeThrowError) {
      throw new Error('Fake error')
    }

    // ...
  } catch (error) {
    // ...
  }
}

// ============== Don't Touch ==============
const products = await getProducts()
const firstProduct = products[0] // Must be an product object with the properties above
console.log(firstProduct)

fakeThrowError = true
const productsWithError = await getProducts()
const firstProductWithError = productsWithError[0] // Must be undefined
console.log(firstProductWithError)

export {}
