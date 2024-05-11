import { v4 as uuidv4 } from "uuid";
import { image01, image02, image03 } from '../assets/images';

export const sliderContent = [
  {id: uuidv4(),
    title:"Authentic Taste of Italy Right at Your Doorstep!",
    radius: "24% 36% 28% 28% / 63% 20% 52% 34% ",
    image: image01
  },
  {id: uuidv4(),
    title:"Only the Finest Ingredients for True Food Connoisseurs!",
    radius: "28% 33% 32% 42% / 52% 47% 38% 34% ",
    image: image02
  },
  {id: uuidv4(),
    title:"Italian Recipe Secrets - Every Pizza is a Masterpiece!",
    radius: "42% 43% 28% 28% / 53% 47% 46% 34% ",
    image: image03
  }
]

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
