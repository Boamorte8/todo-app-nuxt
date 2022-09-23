import { db } from "../../db";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const itemIndex = db.todos.findIndex((todo) => todo.id === id);
  if (itemIndex < 0)
    throw createError({
      statusCode: 404,
      statusMessage: "Item not found",
    });

  db.todos[itemIndex].completed = !db.todos[itemIndex].completed;

  return {
    message: "Item was updated successfully",
    item: db.todos[itemIndex],
  };
});
