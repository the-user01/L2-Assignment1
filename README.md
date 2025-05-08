## What are some differences between interfaces and types in TypeScript?

- In typeScript both interface and  type are used to describe the shape of data. An interface is primarily used to define the structure of an object and is best suited for OOP. It supports feartures like declaration merging in where user can declare the same interface multiple times and TypeScript will merge them.

On the other hand type is more flexible. It can be describe not only object shapes but also primitives, unions, intersections and tuples. Types do not support declaration merging. 

  - Some example
    interface User {
    name: string;
    age: number;
    }

  type User = {
  name: string;
  age: number;
  };

  type Status = "success" | "error" | "loading";


## What is the use of the keyof keyword in TypeScript? Provide an example.

- The keyof keyword in TypeScript is used to extract the keys of an object type as a union of string. It allows to create types thet are limited to property names pf another type.
  - Use case of keyof
  
  interface User {
  id: number;
  name: string;
  age: number;
}


type UserKeys = keyof User;

function getProperty(obj: User, key: UserKeys) {
  return obj[key];
}

const user: User = {
  id: 1,
  name: "Alice",
  age: 30
};

console.log(getProperty(user, "name")); // Output: Alice