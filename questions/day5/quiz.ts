// Question 1: Define a ready-only array for the type Comment below

type Comment = {
  id: number;
  text: string;
};

type ReadOnlyComment = any; // Replace "any" with your answer

// Question 2: Make the function below strongly typed
function countDistinct(itemToCount, array) {
  return array.filter(item => item === itemToCount).length
}

countDistinct(1, [1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
countDistinct('a', ['a', 'b', 'c', 'a', 'b', 'c'])

// Question 3: Why the following function get error? Fix it.
function remove<TItem>(itemToRemove: TItem, array: Array<TItem>): TItem {
  return array.filter(item => item !== itemToRemove);
}

remove(1, [1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
remove('a', ['a', 'b', 'c', 'a', 'b', 'c'])

// Question 4: Support both string and number for the property id in the type below
interface User {
  id: any;
  name: string;
  email: string
}

const user: User = {
  id: 1,
  name: 'John',
  email: 'john@gmail.com'
}

const user2: User = {
  id: '1',
  name: 'John2',
  email: 'john2@mail.com'
}

console.log(user, user2)

// Question 5: Implement function getNth below
class List<ItemType> {
  private items: ItemType[] = []

  add(item: ItemType) {
      this.items.push(item)
  }

  // getNth... here
}

// Question 6: Make the function below strongly typed
function logName(object: any) {
  console.log("My name is " + object.name);
}

logName({ name: 'John' })
logName({ name: 'John2', age: 20 })
logName({ name: 'John3', age: 30, address: '123 Main St' })

export {}
