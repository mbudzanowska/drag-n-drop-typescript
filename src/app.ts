// import @types
import _ from "lodash";
console.log(_.shuffle([1, 2, 3]));

// declare
declare var GLOBAL: string;
console.log(GLOBAL);

import { Product } from "./product.model";

const p1 = new Product("A book", 12.99);
console.log(p1.getInformation());

///////

import "reflect-metadata";
import { plainToClass } from "class-transformer";

// assuming these comes from the backend as a plain json
const products = [
  { title: "A carpet", price: 2.99 },
  { title: "A book", price: 12.99 },
];

// manually transforming to the instances
const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

console.log(loadedProducts);

const loadedProducts_better = plainToClass(Product, products);
console.log(loadedProducts_better);
///////////////////

import { IsNotEmpty, IsNumber, IsPositive, validate } from "class-validator";

export class Product2 {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}

const newProd = new Product2("", -5.99);
validate(newProd).then(errors => {
  if(errors.length > 0){
    console.log("validation errors");
    console.log(errors);
  }
  console.log(newProd.getInformation());
})
///

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
