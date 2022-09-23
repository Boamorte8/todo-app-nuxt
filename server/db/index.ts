import { Item } from "../../models/item";

interface DB {
  todos: Item[];
}

export const db: DB = {
  todos: [],
};
