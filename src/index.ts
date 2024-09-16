const message: string = "Hello World!";
const isValid: boolean = true;
let age: number = 555;
let isMarried: null = null;
let isHuman: undefined = undefined;

// arrays
const arrayOfNumber: number[] = [1, 34, 56, 6, 0];
const arrayOfString: string[] = ["item1", "item2"];
const users: { id: number; username: string }[] = [
  { id: 1, username: "john_doe" },
  { id: 2, username: "jane_doe" },
  { id: 3, username: "bob_doe" },
];

// tuple
let user: [number, string] = [1, "John"];
/* console.log(user[0]);
console.log(user[1]); */

// enum

const enum Gender {
  MALE,
  FEMALE,
  OTHERS,
}

/* console.log(Gender.FEMALE);
console.log(Gender.MALE.toString); */

// JavaScript
/**
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 */

// Typescript
/**
 * any
 * unknown
 * never
 * enum
 * tuple
 */

// functions

function printSomething(something: any): void {
  console.log(something);
}

function basicValidation(email: string): boolean | void {
  if (!email) return false;
}

function sum(...args: number[]): number {
  return args.reduce((prev, current) => prev + current, 0);
}

function calculateDiscount(price: number, discount?: number): number {
  // if(!discount) discount = 0;
  return price - (discount || 0);
}

function processInput(input: string | number): void {
  typeof input === "number" ? input * input : input.toLocaleUpperCase();
}

// objects
const todo: {
  readonly id: number;
  description: string;
  startDate?: Date;
  todoInfo?: () => void;
} = {
  id: 123,
  description: "Shopping!",
  // todoInfo is not defined here, which is fine since it's optional
};

//console.log(todo);

// type
type Todo = {
  readonly id: number;
  description: string;
  startDate?: Date;
  todoInfo?: () => void;
};

type stringOrNumber = string | number;
type Theme = "dark" | "light";

const todo2: Todo = {
  id: 5686,
  description: "Todo 2",
  startDate: new Date(),
  todoInfo: function () {
    console.log(`${this.id} ${this.description} ${this.startDate}`);
  },
};

// todo2.todoInfo && todo2.todoInfo();

// Union Type

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

function greet(name: string | null | undefined): void {
  if (name) console.log(name.toUpperCase());
  else console.log("Hole");
}

// Interface type

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  price: number;

  printAuthor?(): void;
  printBookInfo?: () => void;
}

const book1: Book = {
  isbn: 55685298,
  title: "Title 1",
  author: "Author",
  price: 10.0,
};

const book2: Book = {
  isbn: 55685298,
  title: "Title 2",
  author: "Author 2",
  price: 10.0,
  printAuthor(): void {
    console.log(`Author is ${this.author}`);
  },
  printBookInfo: () => console.log(`ISBN:${book2.isbn}\nTitle:${book2.title}`),
};

// interface extends

interface DiscountedBook extends Book {
  discountPercentage: number;
  getDiscountedPrice(): number;
}

const discountedBook: DiscountedBook = {
  isbn: 55685298,
  title: "Title 2",
  author: "Author 2",
  price: 10.0,

  discountPercentage: 20,
  getDiscountedPrice(): number {
    return this.price - (this.price * this.discountPercentage) / 100;
  },
};

// classes

/* function Item(id:number,name:string):void{
  this.id = id;
  this.name = name;
} */

class Item {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const item1 = new Item(1, "Item 1");

/**
 * The key difference between interfaces and type alias is:
 * Type alias can be represent primitive types{literals}, union types, intersections types, tuple , etc.
 * while interfaces are primarily used to represent the shape of an object.
 */

// generics

const genericArray: Array<number> = [1, 1, 45];

function genericFunction<T>(arg: T): T {
  return arg;
}

genericFunction<string>("test");
genericFunction<number>(12);
genericFunction<false>(false);
genericFunction<null>(null);

function twoTypeGenericFunction<T, U>(param1: T, param2: U):[T,U] {
  return [param1, param2];
}

interface GenericInterface<T> {
  value: T;
}

const genericInterfaceInstance: GenericInterface<string> = {
  value: "test",
};
