import { db } from "../../db";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const itemIndex = db.todos.findIndex((todo) => todo.id === id);
  if (itemIndex < 0)
    throw createError({
      statusCode: 404,
      statusMessage: "Item not found",
    });

  const deletedItem = db.todos.splice(itemIndex, 1);

  return {
    message: "Item was deleted successfully",
    deletedItem,
  };
});
