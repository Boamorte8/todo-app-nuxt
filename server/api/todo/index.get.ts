import { db } from "../../db";

export default defineEventHandler(() => {
  return db.todos;
});
