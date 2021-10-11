
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import _ from "lodash";

console.log(_.shuffle([1, 2, 3]));

declare var GLOBAL: string;
console.log(GLOBAL);

import { Product } from "./product.model";

const p1 = new Product("A book", 12.99);
console.log(p1.getInformation());

///////

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

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
