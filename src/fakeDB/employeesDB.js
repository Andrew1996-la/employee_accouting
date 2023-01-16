import { generateId } from "../utils";

const employeesDB = [
  {
    name: "Peter F.",
    salary: 3500,
    key: generateId(),
    increase: false,
    rise: false,
  },
  {
    name: "John S.",
    salary: 1200,
    key: generateId(),
    increase: false,
    rise: false,
  },
  {
    name: "Adam R.",
    salary: 2400,
    key: generateId(),
    increase: false,
    rise: false,
  },
];

export default employeesDB;
