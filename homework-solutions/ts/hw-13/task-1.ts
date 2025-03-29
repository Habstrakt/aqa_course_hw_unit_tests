

const num1: number = 42;
const str: string = "Hello, TypeScript";
const isComplete: boolean = true;
const numbers: number[] = [1, 2, 3, 4, 5];
const cities: string[] = ["Minsk", "Warsaw", "London"];
const person: {name: string, age: number, city: string} = {name: "Alice", age: 30, city: "Minsk"}

type User = {
  name: string,
  age: number,
  email?: string
};

type Grade = 'junior' | 'middle' | 'senior';

interface Car {
  brand: string,
  model: string,
  year?: number
};

interface Address {
  street: string,
  city: string,
  zipCode: number
};

interface FullAddress extends Address {
  country: string
};

type Product = {
  id: number
  name: string
  price: number
}

type DiscountedProduct = Product & {discount: number}

function calculateDiscount(product: DiscountedProduct):number {
  return product.price * (1 - product.discount / 100);
}

const product: DiscountedProduct = {
  id: 1,
  name: "iPhone",
  price: 1000,
  discount: 10
};

console.log(calculateDiscount(product));