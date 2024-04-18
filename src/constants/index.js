import { v4 as uuidv4 } from "uuid";

export const categoriesList = [
  {id: uuidv4(),
  value: " All",
  radius: "35% 43% 28% 28% / 63% 57% 46% 34% "},
  {id: uuidv4(),
  value: " Meat",
  radius: "43% 57% 69% 31% / 28% 56% 44% 72%"},
  {id: uuidv4(),
  value: " Vegan",
  radius: "34% 66% 37% 63% / 56% 31% 69% 44%"},
  {id: uuidv4(),
  value: " Hot",
  radius: "42% 58% 66% 34% / 39% 44% 56% 61%"},
  {id: uuidv4(),
  value: " Bqq",
  radius: "58% 42% 57% 43% / 44% 44% 56% 56%"}
];

export const sortList = [
  {
  value: "Popularity",
  sortProperty: "rating"},
  {
  value: "Price: Low to High",
  sortProperty: "minPrice"},
  {
  value: "Price: High to Low",
  sortProperty: "-minPrice"},
];
