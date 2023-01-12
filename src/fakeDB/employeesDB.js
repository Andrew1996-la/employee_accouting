import { generateId } from "../utils";

const employeesDB = [
  {
    name: "Peter F.",
    salary: 3500,
    key: generateId(),
    increase: false,
  },
  {
    name: "John S.",
    salary: 1200,
    key: generateId(),
    increase: false,
  },
  {
    name: "Adam R.",
    salary: 2400,
    key: generateId(),
    increase: false,
  },
];

export default employeesDB;
